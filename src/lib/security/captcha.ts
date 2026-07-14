export type CaptchaProvider = 'turnstile' | 'recaptcha'

type CaptchaVerificationResult = {
  ok: boolean
  provider: CaptchaProvider
  score?: number
  reasons?: string[]
}

type CaptchaApiResponse = {
  success?: boolean
  score?: number
  'error-codes'?: string[]
}

function getProviderFromEnv(): CaptchaProvider {
  const provider = (process.env.CAPTCHA_PROVIDER ?? 'turnstile').trim().toLowerCase()
  return provider === 'recaptcha' ? 'recaptcha' : 'turnstile'
}

function getCaptchaSecret(provider: CaptchaProvider): string {
  const envName = provider === 'recaptcha' ? 'RECAPTCHA_SECRET_KEY' : 'TURNSTILE_SECRET_KEY'
  const secret = process.env[envName]?.trim()
  if (!secret) {
    throw new Error(`${envName} is not configured`)
  }
  return secret
}

function getVerifyUrl(provider: CaptchaProvider): string {
  return provider === 'recaptcha'
    ? 'https://www.google.com/recaptcha/api/siteverify'
    : 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
}

export async function verifyCaptchaToken(params: {
  token: string
  remoteIp?: string
  minScore?: number
  provider?: CaptchaProvider
}): Promise<CaptchaVerificationResult> {
  const provider = params.provider ?? getProviderFromEnv()
  const secret = getCaptchaSecret(provider)

  const body = new URLSearchParams({
    secret,
    response: params.token,
  })

  if (params.remoteIp) {
    body.set('remoteip', params.remoteIp)
  }

  const response = await fetch(getVerifyUrl(provider), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
    cache: 'no-store',
  })

  if (!response.ok) {
    return {
      ok: false,
      provider,
      reasons: [`http_${response.status}`],
    }
  }

  const data = (await response.json()) as CaptchaApiResponse
  const minScore = params.minScore ?? 0.5
  const score = typeof data.score === 'number' ? data.score : undefined

  if (!data.success) {
    return {
      ok: false,
      provider,
      score,
      reasons: data['error-codes'] ?? ['captcha_failed'],
    }
  }

  if (score !== undefined && score < minScore) {
    return {
      ok: false,
      provider,
      score,
      reasons: ['score_too_low'],
    }
  }

  return {
    ok: true,
    provider,
    score,
  }
}
