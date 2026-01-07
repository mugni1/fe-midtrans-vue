import { ShoppingBag, CalendarClockIcon, Scale } from "lucide-vue-next";

export const data = {
  brand_image_url: "https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Fmeta%2Fheader-logo-bangjeff.gif&w=1080&q=75",
  links: [
    { href: '/', name: 'Top Up', icon: ShoppingBag },
    { href: '/transaction', name: 'Transaction', icon: CalendarClockIcon },
    { href: '/calculator', name: 'Calculator', icon: Scale },
  ]
}
