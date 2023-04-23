import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { MessageProvider } from '@/context/message.context'
import { MessageNotification } from '@/components/message-notification'
export default function App({ Component, pageProps }: AppProps) {

  return <MessageProvider> <Component {...pageProps} />
    <MessageNotification></MessageNotification>
  </MessageProvider>
}
