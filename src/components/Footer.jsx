import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center py-24 bg-gradient-to-b from-transparent via-main/70 to-main/80">
            <div className="flex flex-row gap-4 mb-4">
                <InstagramLogoIcon className="text-accent" height={32} width={32}/>
                <TwitterLogoIcon className="text-accent" height={32} width={32}/>
                <LinkedInLogoIcon className="text-accent" height={32} width={32}/>
            </div>
            <h4 className="text-center text-accent font-spacegrotesk font-bold xl:text-xl text-sm">© 2024 by CyberSpeed Motors. All right reserved</h4>
            <span className="text-center text-white font-spacegrotesk mt-2">Created by <a className="underline text-second" href="https://tmaldocena.com">Tomás Maldocena</a></span>
        </footer>
    )
}

export default Footer