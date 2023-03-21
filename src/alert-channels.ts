import { URL } from 'node:url'
import {
  EmailAlertChannel,
} from '@checkly/cli/constructs'

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 30
}

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'michelle.liebheit@posteo.de',
  ...sendDefaults
})
