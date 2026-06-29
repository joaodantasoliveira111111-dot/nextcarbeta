"use client";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <span className="font-display font-semibold text-sm text-gray-900">NextCar</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">
              Consultoria automotiva inteligente. Representamos quem compra.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Empresa</h4>
            <div className="space-y-2">
              {["Como funciona", "Benefícios", "FAQ", "Contato"].map(item => (
                <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="block text-xs text-gray-500 hover:text-gray-900 transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Legal</h4>
            <div className="space-y-2">
              {["Privacidade", "Termos", "LGPD"].map(item => (
                <a key={item} href="#" className="block text-xs text-gray-500 hover:text-gray-900 transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">Contato</h4>
            <div className="space-y-2 text-xs text-gray-500">
              <p>contato@nextcar.com.br</p>
              <p>(81) 3000-0000</p>
              <p>Recife - PE</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-400">&copy; {year} NextCar. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-gray-50 text-gray-400 border border-gray-200">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Seguro
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
