
import { motion } from "framer-motion";
import { useState } from "react";

const logos = [
  {
    name: "Nike",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M21.84 5.48c-2.91 2.11-5.53 3.1-8.32 3-1.96-.07-3.88-.81-5.74-2.18-1.39-1.02-2.66-2.44-4.04-4.3l-1 3.09c1.3 2.29 2.97 3.96 5.04 5.02 3.29 1.68 5.65 1.12 8.21.13 1.88-.73 4.31-2.09 7.51-4.25.42-.28.8-.39 1.16-.32.46.09 1.1.42 1.34.94-2.44 1.72-4.82 2.97-7.25 3.76-2.82.92-5.53.98-8.13.17-1.49-.47-2.91-1.18-4.28-2.15-1.84-1.3-3.1-2.97-3.79-5.03L.05 17.33l2.01-.64 1.37-4.39c1.14.7 2.46 1.07 3.97 1.12 2.14.07 4.55-.56 7.23-1.89 1.56-.77 3.1-1.82 4.64-3.13 1.87-1.58 2.61-1.52 3.13-1.19.12.08.21.16.25.24.14.22.03.65-.5 1.03-2.93 1.89-5.48 3.21-7.63 3.97-2.6.91-4.69.86-6.28-.17-.39-.25-.75-.56-1.09-.9-.01 0-.02.01-.05.1l-2.33 7.77 2.1-.61 1.94-6.5c.15.06.29.11.44.15 1.66.44 3.68.08 6.07-1.04 2.56-1.2 5.43-3.23 8.62-6.1-.45-.51-1.06-.76-1.64-.84-.62-.09-1.25.05-1.57.28l-.89.57z" />
      </svg>
    ),
    bgColor: "from-purple-500 to-indigo-600"
  },
  {
    name: "Spotify",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 1 1-.277-1.215c3.809-.87 7.076-.496 9.713 1.115a.623.623 0 0 1 .206.857zM17.81 13.7a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.13-9.965-1.166A.78.78 0 0 1 6.431 11.3c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .146 1.072zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 1 1-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 1 1-.954 1.608z"/>
      </svg>
    ),
    bgColor: "from-green-500 to-emerald-600"
  },
  {
    name: "Amazon",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M15.93 17.09c-.274.154-.687.342-1.25.529-1.647.546-3.91.984-6.207 1.056-2.049.064-3.884-.257-5.343-1.157-.148-.091-.254-.097-.35-.006-.112.107-.08.277.114.468C3.912 19.119 6.232 20 8.896 20c3.035 0 5.056-1.043 7.856-3.219.68-.52 1.544-1.378 2.367-2.264.048-.065.078-.148.056-.225-.023-.076-.05-.082-.107-.032-.593.526-1.958 1.514-3.139 2.83zm1.096-3.427c-.57.56-1.181.958-1.556.958-.118 0-.186-.057-.205-.133-.02-.087.026-.238.112-.366.42-.628.63-1.361.63-2.207 0-1.122-.151-2.138-.857-2.138-.706 0-.913 1.398-.934 2.148-.28.003-.56.009-.83.009-.908 0-1.68-.039-2.283-.093-.44-.039-.8-.084-1.092-.128-.314-.048-.575-.097-.82-.146-.17-.03-.324-.068-.486-.092-.093-.017-.182-.038-.282-.057-.014-.119-.02-.235-.02-.347 0-.958.409-1.96 1.015-2.828a54.75 54.75 0 0 0-.143-.162c-1.23-1.169-2.176-2.487-1.902-3.953.034-.181.097-.358.19-.522.492-.86 1.59-1.244 2.755-1.092.468.06.88.214 1.236.417.272.156.51.35.747.544.346.003.7-.518 1.058-.518 1.023 0 2.071.48 2.831 1.104.993.814 1.703 1.968 1.878 3.215.152 1.102-.22 2.613-1.14 3.997-.459.689-1.028 1.392-1.489 1.99zm3.256 3.068C22.8 14.409 24 11.1 24 7.93 24 3.578 22.104.294 17.038.026 13.913-.146 11.182 1.036 9.906 3.06c-.439.694-.76 1.468-.942 2.282-.785-.258-1.627-.394-2.512-.394-3.178 0-6.096 2.11-6.096 4.982 0 2.205 1.705 4.082 4.059 4.775C5.46 16.76 7.693 18.25 11 18.25c1.407 0 2.825-.277 4.166-.803.617-.241 1.162-.546 1.643-.886.165.266.338.521.532.764.915 1.14 2.182 1.688 3.933 1.733.26.007.437-.195.446-.44.01-.233-.155-.44-.407-.447-1.119-.035-1.899-.297-2.478-.908-.315-.336-.571-.734-.786-1.158l-.005-.014z" />
      </svg>
    ),
    bgColor: "from-amber-500 to-orange-600"
  },
  {
    name: "Zoom",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 1.5c-4.697 0-8.5 3.803-8.5 8.5s3.803 8.5 8.5 8.5 8.5-3.803 8.5-8.5-3.803-8.5-8.5-8.5zm-2 3h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm7 2.5h-2.5V11h2.5V8.5zm-3.5 0h-3.5V11H13V8.5z" />
      </svg>
    ),
    bgColor: "from-blue-500 to-cyan-600"
  },
  {
    name: "Slack",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M9.5 3C8.1 3 7 4.1 7 5.5S8.1 8 9.5 8h2v2H5.5C4.1 10 3 11.1 3 12.5S4.1 15 5.5 15H11c1.4 0 2.5-1.1 2.5-2.5v-6C13.5 5.1 12.4 4 11 4H9.5V3zm.5 2h1c.28 0 .5.22.5.5v6c0 .28-.22.5-.5.5H5.5a.5.5 0 010-1h2v-2H5.5a.5.5 0 010-1h2V7h2a.5.5 0 000-1H9.5a.5.5 0 01-.5-.5.5.5 0 01.5-.5zm4 1c0-1.4 1.1-2.5 2.5-2.5h1.5V2h1v2h1c1.4 0 2.5 1.1 2.5 2.5S20.9 9 19.5 9h-2v2h6v1h-6v2h2c.28 0 .5.22.5.5s-.22.5-.5.5h-1.5v2h-1v-2H16c-1.4 0-2.5-1.1-2.5-2.5v-4.9c0-.06 0-.1.01-.16-.01-.11-.01-.23-.01-.34zm2.5-1.5a.5.5 0 00-.5.5V7h2a.5.5 0 000-1h-1a.5.5 0 00-.5-.5zm-6 7a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zm.5 1h3v3h-3v-3z" />
      </svg>
    ),
    bgColor: "from-rose-500 to-pink-600"
  },
  {
    name: "Uber",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM8.65 15.9c0 .23-.03.43-.09.6-.06.17-.15.31-.26.42-.11.11-.24.19-.4.25-.15.05-.33.08-.52.08h-1.7c-.2 0-.37-.03-.53-.08-.15-.06-.29-.14-.4-.25a1.2 1.2 0 01-.26-.42 1.6 1.6 0 01-.09-.6v-3.96h1.44v3.58c0 .2.02.34.07.44a.3.3 0 00.27.14h.55a.3.3 0 00.27-.14c.05-.1.07-.25.07-.44v-3.58h1.44v3.96zm4.16-3.58v6.06h-1.48l-.05-5.22-1.06 5.22H9.13L8.04 13.1v5.28H6.6V9.92h2.2l.92 4.34.93-4.34h2.17zm3.76 4.55c0 .53-.12.93-.34 1.2-.22.25-.57.38-1.05.38-.24 0-.45-.03-.63-.1a1.32 1.32 0 01-.47-.3 1.3 1.3 0 01-.3-.47c-.06-.19-.1-.4-.1-.7v-3.33c0-.22.02-.42.07-.59.04-.17.12-.31.22-.44.1-.12.23-.21.4-.28.17-.07.38-.1.63-.1.27 0 .5.03.67.1.17.07.3.16.4.28.1.12.17.27.2.44.05.17.08.36.08.59v1.28h-1.44v-1.13c0-.15-.03-.26-.1-.32a.36.36 0 00-.25-.08c-.1 0-.18.03-.24.08-.06.06-.09.17-.09.32v3.62c0 .15.03.26.09.32.06.05.13.08.24.08.11 0 .2-.03.25-.08.07-.06.1-.17.1-.32v-1.48h1.44v1.63z" />
      </svg>
    ),
    bgColor: "from-gray-700 to-gray-900"
  },
];

export const CompanyLogos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    hover: { scale: 1.1, rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }
  };

  return (
    <div className="relative bg-stripe-gray py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className="text-center text-3xl font-semibold text-stripe-secondary mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Empresas líderes confiam em nossa plataforma
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          De startups a grandes corporações, milhares de empresas usam nossa plataforma para impulsionar seus negócios
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="flex flex-col items-center relative"
            >
              <div className="relative group">
                <motion.div 
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${logo.bgColor} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`}
                />
                <div className="h-16 w-24 relative flex items-center justify-center bg-slate-900 rounded-full p-2 transition-transform group-hover:shadow-xl">
                  <div className="text-white">
                    {logo.svg}
                  </div>
                  
                  {/* Interactive particles effect on hover */}
                  {hoveredIndex === i && (
                    <>
                      {[...Array(8)].map((_, particleIndex) => (
                        <motion.div
                          key={`particle-${particleIndex}`}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          initial={{ 
                            x: 0, 
                            y: 0, 
                            opacity: 1,
                            scale: 1
                          }}
                          animate={{ 
                            x: Math.random() * 60 - 30, 
                            y: Math.random() * 60 - 30,
                            opacity: 0,
                            scale: Math.random() * 2
                          }}
                          transition={{ 
                            duration: 0.8 + Math.random() * 0.5, 
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
              <motion.span 
                className="text-sm text-gray-600 mt-3 font-medium"
                animate={hoveredIndex === i ? 
                  { color: "#4B5563", fontWeight: "600", y: 0 } : 
                  { color: "#6B7280", fontWeight: "500", y: 0 }
                }
                transition={{ duration: 0.2 }}
              >
                {logo.name}
              </motion.span>

              {/* Pulse animation around the active logo */}
              {hoveredIndex === i && (
                <motion.div 
                  className="absolute -inset-4 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.2, 0],
                    scale: [0.8, 1.2, 1.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  style={{ background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)` }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
            <span>+</span>
            <span className="font-semibold">5000</span>
            <span>empresas ao redor do mundo</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
