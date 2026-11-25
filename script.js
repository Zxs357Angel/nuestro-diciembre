const entries = [
  { title: "Un comienzo bonito", message: "Diciembre llegó, y quería que tuvieras un detalle que te acompañe durante estos días. No importa la distancia: quiero que sientas lo especial que eres para mí.", activity: "Hoy piensa en una cosa pequeña que te gustaría vivir este mes." },
  { title: "Una sonrisa tuya", message: "Ojalá pudiera estar ahí para verte sonreír en persona. Mientras llega ese día, quiero recordarte que tu sonrisa puede mejorar hasta el día más pesado.", activity: "Regálate cinco minutos para hacer algo que te guste." },
  { title: "Mi lugar favorito", message: "No necesito un lugar perfecto; me basta con imaginar un futuro en el que podamos compartir momentos sencillos, sin pantallas de por medio.", activity: "Cuéntame cuál sería nuestro plan perfecto para una tarde juntos." },
  { title: "Pequeños detalles", message: "A veces un mensaje, una llamada o una palabra bonita hacen más de lo que creemos. Gracias por cada uno de esos detalles.", activity: "Envíame una canción que describa cómo te sientes hoy." },
  { title: "Un abrazo pendiente", message: "Tengo un abrazo guardado para ti. De esos largos, de los que hacen que por un momento todo esté bien.", activity: "Cierra los ojos e imagina ese abrazo. Ya llegará el de verdad." },
  { title: "Admiro de ti", message: "Me gusta conocerte cada día un poquito más: tus ocurrencias, tu forma de hablar y esos detalles que te hacen ser tú.", activity: "Dime algo de ti que te gustaría que yo conociera mejor." },
  { title: "Día de cuidarte", message: "No tienes que poder con todo todos los días. También mereces descansar, respirar y tratarte con paciencia.", activity: "Haz hoy algo amable por ti, aunque sea descansar un rato." },
  { title: "Una promesa pequeña", message: "Prometo seguir poniendo de mi parte, escucharte y cuidar lo que estamos construyendo, incluso cuando haya días difíciles.", activity: "Piensa en una pequeña promesa que podamos cumplir juntos." },
  { title: "Nuestro primer recuerdo", message: "Me gusta pensar en cómo empezó todo y en que una conversación cualquiera terminó convirtiéndose en algo tan importante.", activity: "Recuerda un momento nuestro que te haya hecho reír." },
  { title: "Eres importante", message: "Quiero que nunca dudes de que tienes un lugar especial en mi vida. No eres una conversación más: eres alguien que elijo cuidar.", activity: "Guarda este mensaje para volver a leerlo cuando lo necesites." },
  { title: "Un día tranquilo", message: "Ojalá hoy tengas un día ligero, con menos preocupaciones y más motivos para estar en paz.", activity: "Tómate algo rico y disfruta el momento sin afán." },
  { title: "Lo que viene", message: "Todavía nos faltan muchos recuerdos por crear. Me emociona pensar en todas las primeras veces que algún día podremos vivir juntos.", activity: "Dime qué es lo primero que te gustaría hacer cuando nos veamos." },
  { title: "Gracias", message: "Gracias por tu tiempo, tu cariño y por dejarme formar parte de tus días. Valoro más de lo que a veces alcanzo a decir.", activity: "Hoy dime una cosa por la que te sientas agradecida." },
  { title: "Tu forma de ser", message: "No quiero que cambies las cosas que te hacen única. Me gusta seguir descubriéndote, incluso en los detalles más pequeños.", activity: "Cuéntame cuál es una característica tuya que te guste." },
  { title: "Mitad del camino", message: "Ya vamos avanzando en diciembre. Si hoy ha sido un día complicado, recuerda que no tienes que resolverlo todo de una vez.", activity: "Respira profundo tres veces y date un descanso." },
  { title: "Un deseo para ti", message: "Deseo que tengas motivos para sentir orgullo de ti, que encuentres oportunidades bonitas y que nunca te falten personas que te quieran bien.", activity: "Escribe un deseo para ti misma, uno que quieras cumplir." },
  { title: "Nuestro equipo", message: "No se trata de que nunca tengamos diferencias, sino de aprender a hablar, entendernos y encontrar soluciones sin dejar de respetarnos.", activity: "Piensa en algo que podamos mejorar como equipo." },
  { title: "Un poquito de magia", message: "La distancia puede hacer difíciles algunas cosas, pero también me recuerda cuánto deseo que llegue el momento de estar cerca.", activity: "Mira algo bonito a tu alrededor y mándame una foto." },
  { title: "Te escucho", message: "Quiero ser alguien con quien puedas hablar sin miedo a que te juzguen. Tus días buenos y los difíciles también importan.", activity: "Si tienes algo en la cabeza, puedes contármelo con calma." },
  { title: "Cuenta regresiva", message: "Cada día que pasa es uno menos para terminar este año y seguir construyendo nuevas historias.", activity: "Elige una película o serie que te gustaría ver conmigo." },
  { title: "Una palabra", message: "Si tuviera que resumir lo que deseo para nosotros, elegiría una palabra: paciencia. Lo bonito también se construye paso a paso.", activity: "Dime una palabra que quieras que nos acompañe." },
  { title: "Cerca en la distancia", message: "Aunque hoy no pueda tomar tu mano, quiero que sepas que estoy aquí para escucharte y acompañarte de la manera que pueda.", activity: "Cuando puedas, hagamos una llamada sin distracciones." },
  { title: "Mereces cosas bonitas", message: "Ojalá nunca te conformes con menos respeto, cuidado y cariño del que mereces. Tu bienestar también importa.", activity: "Haz una lista mental de tres cosas que te hagan sentir orgullosa." },
  { title: "Noche especial", message: "Hoy quiero recordarte que eres una parte muy bonita de mi año. Gracias por cada risa, cada charla y cada instante compartido.", activity: "Busca un lugar cómodo, ponte algo que te guste y disfruta la noche." },
  { title: "Feliz Navidad", message: "Feliz Navidad, mi niña. Aunque hoy no pueda estar a tu lado, deseo que te rodeen la tranquilidad, el cariño y momentos que te hagan feliz. Ojalá algún día podamos celebrar estas fechas tomados de la mano.", activity: "Disfruta con las personas que quieres. Guarda un abrazo para cuando podamos dárnoslo en persona." },
  { title: "Un día para recordar", message: "Espero que ayer hayas vivido momentos bonitos. Hoy quiero que te quedes con lo bueno y descanses de todo lo que no salió perfecto.", activity: "Cuéntame cuál fue tu momento favorito de Navidad." },
  { title: "Lo que agradezco", message: "Agradezco que nuestros caminos se hayan cruzado. No sé todo lo que traerá el futuro, pero sí sé que quiero seguir conociéndote y cuidando esto.", activity: "Dime algo de este año que agradezcas." },
  { title: "Un futuro posible", message: "Me ilusiona imaginar planes sencillos: caminar juntos, comer algo rico, reírnos por cualquier bobada y tener recuerdos que no dependan de una pantalla.", activity: "Elige un sitio al que te gustaría que fuéramos algún día." },
  { title: "Ya casi termina", message: "Este año está por despedirse. Quiero que recuerdes cuánto has avanzado, incluso en esos días en los que sentiste que no podías más.", activity: "Reconoce algo que hayas conseguido este año." },
  { title: "Mi deseo para nosotros", message: "Deseo que sigamos creciendo, aprendiendo a entendernos y celebrando los logros del otro. Que nunca nos falten honestidad, respeto y ganas de construir.", activity: "Dime qué te gustaría que viviéramos juntos el próximo año." },
  { title: "Gracias por este año", message: "Llegamos al último día de diciembre. Gracias por estar, por compartir conmigo tus días y por hacer parte de esta historia. Ojalá el próximo año nos acerque un poquito más a ese abrazo que tenemos pendiente. Te quiero muchísimo.", activity: "Cierra el año pensando en algo que quieras dejar atrás y algo bonito que quieras empezar. Feliz año nuevo." }
];
const calendar = document.getElementById("calendar");
const status = document.getElementById("status");
const modal = document.getElementById("letter");
const isPreview = new URLSearchParams(location.search).has("preview") || location.pathname.endsWith("preview.html");
const specialDays = new Set([24,25,31]);
const monthNames = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

function mexicoNowParts() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Mexico_City", year:"numeric", month:"numeric", day:"numeric",
    hour:"numeric", minute:"numeric", hourCycle:"h23"
  }).formatToParts(new Date());
  return Object.fromEntries(parts.filter(p => p.type !== "literal").map(p => [p.type, Number(p.value)]));
}
function unlocked(day) {
  if (isPreview) return true;
  const now = mexicoNowParts();
  if (now.year > 2026 || (now.year === 2026 && now.month > 12)) return true;
  if (now.year < 2026 || now.month < 12) return false;
  return now.day > day || (now.day === day && now.hour >= 8);
}
function renderCalendar() {
  const firstDay = new Date(2026, 11, 1).getDay();
  for (let i=0;i<firstDay;i++) {
    const empty=document.createElement("div"); empty.className="day empty"; calendar.appendChild(empty);
  }
  for(let day=1;day<=31;day++) {
    const button=document.createElement("button");
    button.type="button";
    button.className="day" + (specialDays.has(day) ? " special" : "");
    button.disabled=!unlocked(day);
    button.setAttribute("aria-label", button.disabled ? `Día ${day}, bloqueado` : `Abrir día ${day}`);
    button.innerHTML=`<span class="number">${day}</span><span class="symbol">${button.disabled ? "✧" : (specialDays.has(day) ? "✦ SORPRESA" : "♥")}</span>`;
    if(!button.disabled) button.addEventListener("click",()=>openLetter(day));
    calendar.appendChild(button);
  }
  if(isPreview) status.textContent="Vista previa: todas las casillas están abiertas para que puedas probar el diseño.";
  else {
    const now=mexicoNowParts();
    status.textContent = now.year===2026 && now.month===12
      ? "La casilla del día se abre a las 8:00 a. m. (hora de Ciudad de México)."
      : "El calendario se activa el 1 de diciembre de 2026, a las 8:00 a. m. de Ciudad de México.";
  }
}
function openLetter(day) {
  const item=entries[day-1];
  document.getElementById("letter-date").textContent=`DICIEMBRE · DÍA ${day}`;
  document.getElementById("letter-title").textContent=item.title;
  document.getElementById("letter-message").textContent=item.message;
  document.getElementById("letter-activity").textContent=item.activity;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function closeLetter() {
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
modal.addEventListener("click",e=>{if(e.target.hasAttribute("data-close")) closeLetter();});
document.addEventListener("keydown",e=>{if(e.key==="Escape") closeLetter();});
renderCalendar();
if("serviceWorker" in navigator && !isPreview) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
