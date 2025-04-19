import { Zap } from "lucide-react"
import Link from "next/link"


const UpgradeButton = () => {

    const CHECKOUT_URL = "https://text-editor.lemonsqueezy.com/buy/75deadea-21ed-4fa0-9fb6-9c0231eb1adb"

  return (
    <Link
      href={CHECKOUT_URL}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg 
        hover:from-blue-600 hover:to-blue-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  )
}

export default UpgradeButton