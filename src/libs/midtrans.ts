export const loadMidtrans = () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('midtrans-script')) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.id = 'midtrans-script'
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
    script.setAttribute(
      'data-client-key',
      import.meta.env.VITE_MIDTRANS_CLIENT_KEY
    )
    script.onload = () => resolve(true)
    script.onerror = reject

    document.body.appendChild(script)
  })
}
