function About() {
    const tags = ['e-Governance', 'Digital ID', 'UIDAI Testing', 'GST Services', 'Financial Inclusion', 'Banking Correspondent', 'AB-PMJAY']

    const kpis = [
        { num: '8', label: 'Years serving the government sector since 2018' },
        { num: '500', label: 'Government project claims processed' },
        { num: '100', label: 'Projects delivered across India' },
        { num: 'Pan-India', label: 'Operational presence across multiple states' },
    ]

    return (
        <section className="px-16 py-[120px] bg-white grid grid-cols-2 gap-[100px] items-center">

            {/* LEFT */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-saffron"></div>
                    <span className="font-['DM_Mono'] text-[11px] tracking-[2.5px] uppercase text-saffron">Who We Are</span>
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-[56px] font-semibold leading-[1.05] tracking-[-1.5px] text-ink">
                    A Trusted Partner in India's Digital Transformation
                </h2>
                <p className="text-[15px] text-ink-soft leading-[1.85] mt-6">
                    UVTECH MULTISERVICES PVT. LTD. is a division of <strong className="text-ink font-semibold">UV Technology Systems</strong>. We provide end-to-end solutions for accelerated deployment, supply, managing and marketing of information technology services across government, businesses, and enterprise customers.
                </p>
                <p className="text-[15px] text-ink-soft leading-[1.85] mt-4">
                    Our mission is to deliver <strong className="text-ink font-semibold">innovative and secure Aadhaar, e-Governance, and financial inclusion solutions</strong> that empower organizations and citizens.
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                    {tags.map(tag => (
                        <span key={tag} className="border border-ink/10 font-['DM_Mono'] text-[11px] px-4 py-1.5 text-ink-soft tracking-[0.5px]">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 border border-ink/10">
                {kpis.map((kpi, i) => (
                    <div key={i} className="p-10 border border-ink/10">
                        <div className="font-['Cormorant_Garamond'] text-[52px] font-semibold leading-none text-ink">
                            {kpi.num}{kpi.num !== 'Pan-India' && <span className="text-saffron">+</span>}
                        </div>
                        <div className="text-[13px] text-ink-soft mt-2 leading-snug">{kpi.label}</div>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default About