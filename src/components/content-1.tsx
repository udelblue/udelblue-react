import Image from 'next/image'
import { TextEffect } from '../../components/motion-primitives/text-effect'





export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
                    
                    <TextEffect per='char' preset='fade'>
                    From Architect to Leader: Christopher Sommers' Expertise in Enterprise IT
                    </TextEffect>

                    </h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/827775.jpg" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/827775.jpg" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                       
                    <p className="text-muted-foreground">I am a highly accomplished IT professional with over 20 years of experience in leading and managing complex technology initiatives. I possess extensive cloud expertise across <span className="text-accent-foreground font-bold"> AWS, Azure, Oracle and GCP </span>, with a proven track record in cloud migration and modernization. I have demonstrated the ability to build and manage high-performing teams. I offer a deep understanding of application development, big data analytics, and enterprise architecture best practices. In addition I hold a comprehensive set of industry certifications, including <span className="text-accent-foreground font-bold">AWS Certified Solutions Architect Professional</span> and <span className="text-accent-foreground font-bold">GCP Associate Cloud Engineer</span>. I actively contribute to the tech community and shares insights on my tech blog and GitHub <a href="https://github.com/udelblue">(udelblue)</a>. I am passionate about leveraging technology to drive business value and am committed to continuous learning and professional development.</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Technology is my career and passion. </p>
                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">Christopher Sommers</cite>
                   
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
