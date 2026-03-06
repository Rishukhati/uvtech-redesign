function Clients() {
    const row1 = [
        { icon: '🏦', name: 'Bank of Baroda' },
        { icon: '📋', name: 'DMR Associates' },
        { icon: '💻', name: 'eOffice Digital' },
        { icon: '🔗', name: 'CRC' },
        { icon: '📡', name: 'VKVe' },
        { icon: '🏛️', name: 'UTI Infrastructure' },
        { icon: '⚙️', name: 'TechHoc' },
        { icon: '📚', name: 'LEARN:T' },
        { icon: '🌿', name: 'Valurangee' },
        { icon: '🏦', name: 'Bank of India' },
    ]

    const row2 = [
        { icon: '🏥', name: 'UTITSL' },
        { icon: '🆔', name: 'UIDAI' },
        { icon: '📊', name: 'Skill India' },
        { icon: '🏢', name: 'UP Secretariat' },
        { icon: '💊', name: 'AB-PMJAY' },
        { icon: '🔐', name: 'KRA Registry' },
        { icon: '🌐', name: 'NIC Empanelled' },
        { icon: '🏗️', name: 'Govt. of UP' },
        { icon: '📱', name: 'DigiLocker' },
        { icon: '🛡️', name: 'ISO Partners' },
    ]

    const LogoCard = ({ icon, name }) => (
        <div className="flex-shrink-0 w-[190px] h-[88px] bg-white border border-ink/10 flex flex-col items-center justify-center gap-2 px-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-saffron/30 group cursor-default">
            <div className="text-[18px]">{icon}</div>
            <div className="text-[11px] font-semibold text-ink-soft text-center leading-snug group-hover:text-ink transition-colors duration-300">{name}</div>
        </div>
    )

    return (
        <section className="px-16 py-[120px] bg-cream-d">

            {/* Header */}
            <div className="flex justify-between items-end mb-16">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-[1px] bg-saffron"></div>
                        <span className="font-['DM_Mono'] text-[11px] tracking-[2.5px] uppercase text-saffron">Trusted By</span>
                    </div>
                    <h2 className="font-['Cormorant_Garamond'] text-[56px] font-semibold leading-[1.05] tracking-[-1.5px] text-ink">
                        Our Clients <em className="italic text-saffron">& Partners</em>
                    </h2>
                </div>
                <p className="text-[17px] font-light text-ink-soft leading-relaxed max-w-[480px] text-right">
                    Trusted by leading government agencies, financial institutions, and corporate partners. Hover any card to pause.
                </p>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden flex flex-col gap-4">

                {/* Fade edges */}
                <div className="absolute top-0 bottom-0 left-0 w-[160px] bg-gradient-to-r from-cream-d to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-[160px] bg-gradient-to-l from-cream-d to-transparent z-10 pointer-events-none"></div>

                {/* Row 1 — left */}
                <div className="flex gap-4 w-max animate-[marqueeLeft_28s_linear_infinite] hover:[animation-play-state:paused]">
                    {[...row1, ...row1].map((c, i) => <LogoCard key={i} {...c} />)}
                </div>

                {/* Row 2 — right */}
                <div className="flex gap-4 w-max animate-[marqueeRight_32s_linear_infinite] hover:[animation-play-state:paused]">
                    {[...row2, ...row2].map((c, i) => <LogoCard key={i} {...c} />)}
                </div>

            </div>

            <p className="text-center font-['DM_Mono'] text-[11px] text-mist tracking-[0.5px] mt-8">
                — Replace with actual .svg / .png logos when available —
            </p>

        </section>
    )
}
export default Clients