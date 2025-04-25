import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function StatsSection() {
    return (
        <section className="py-1 md:py-1">
            <div className="mx-auto max-w-5xl space-y-8 md:space-y-16">
            
                <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+30</div>
                        <p className="font-bold">Certifications</p>
                        <p className="text-slate-900/50 dark:text-slate-100/50">Certifications accross the top four cloud providers and three pretaining to AI.</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-3xl font-bold">Managed a team of upward of 40 individuals.</div>
                        <p className="font-bold">Managed multiple over my career. </p>
                        <p className="text-slate-900/50 dark:text-slate-100/50">Managed multiple teams of varying disciplines. Including develop software development, testing, production support to data scientists. </p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">+20</div>
                        <p className="font-bold">Years of experience in the technology field.</p>
                        <p className="text-slate-900/50 dark:text-slate-100/50">Experience across multiple disciplines in the technology field. Including, but not limited to software, systems and cloud development. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
