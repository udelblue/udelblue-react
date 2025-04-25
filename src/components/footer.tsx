
import { Cloud, Github, Linkedin, Rss } from 'lucide-react'
import Link from 'next/link'

export default function FooterSection() {
    return (
        <footer className="py-5 md:py-5">
            <div className="mx-auto max-w-5xl px-6">
               

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                   
                <Link
                        href="https://udelblue.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tech Blog"
                        className="text-muted-foreground hover:text-primary block">
                            <Rss></Rss>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/christopher-sommers-58a69a12/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block">
                            <Linkedin></Linkedin>
                    </Link>

                    <Link
                        href="https://github.com/udelblue"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-primary block">
                            <Github></Github>
                                
                    </Link>

                    <Link
                        href="https://www.cloudskillsboost.google/public_profiles/b81b8ac6-0901-4c72-af8b-a9391af3faec"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GCP Certifications"
                        className="text-muted-foreground hover:text-primary block">
                            <Cloud></Cloud>
                                
                    </Link>

                    


                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Christopher Sommers, All rights reserved</span>
            </div>
        </footer>
    )
}
