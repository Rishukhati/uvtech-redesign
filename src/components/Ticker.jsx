function Ticker() {
    const items = [
        { text: 'UIDAI Authorized Agency', highlight: true },
        { text: 'KYC Registration Agency', highlight: false },
        { text: 'ISO 27001 Certified', highlight: true },
        { text: 'UTITSL Empanelled Partner', highlight: false },
        { text: '100+ Govt. Projects', highlight: true },
        { text: 'Pan-India Operations', highlight: false },
        { text: 'ISO 9001 Certified', highlight: true },
        { text: '8+ Years of Excellence', highlight: false },
    ]

    return (
        <div className="bg-ink py-4 overflow-hidden">
            <div className="flex w-max animate-[tickerScroll_25s_linear_infinite]">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 px-12 whitespace-nowrap font-['DM_Mono'] text-[11px] tracking-[2px] uppercase">
                        <div className="w-1 h-1 rounded-full bg-saffron flex-shrink-0"></div>
                        <span className={item.highlight ? 'text-white' : 'text-mist'}>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Ticker