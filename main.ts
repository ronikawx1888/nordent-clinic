import './style.css';
import './hero.css';
import './about.css';
import './cta.css';
import './services.css';
import './results.css';
import './reviews.css';
import './doctors.css';
import './prices.css';
import './process.css';
import './location.css';
import './faq.css';
import './booking.css';
import './footer.css';
import './motion.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import content from './content.json';

gsap.registerPlugin(ScrollTrigger);
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const img = (src: string, alt: string, className = '', eager = false) => `<img src="${import.meta.env.BASE_URL}${src}" alt="${escapeHtml(alt)}" class="${className}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" ${eager ? 'fetchpriority="high"' : ''}>`;
const button = (label: string, className = '', service = '') => `<a class="button ${className}" href="#booking" ${service ? `data-service="${escapeHtml(service)}"` : ''}>${escapeHtml(label)}</a>`;
const navLinks = [['Services','services'],['Emergency','emergency'],['Results','results'],['Prices','prices'],['Contact','booking']];
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<main id="main">
 <section class="hero" aria-labelledby="hero-title">
  <div class="hero-stripes" aria-hidden="true"></div>
  <div class="hero-orbit" aria-hidden="true"></div>
  <header class="header">
   <a class="brand" href="#main" aria-label="Nordent Clinic home">Nordent Clinic</a>
   <nav class="desktop-nav" aria-label="Main navigation">${navLinks.map(([label,id])=>`<a href="#${id}">${label}</a>`).join('')}</nav>
   <div class="header-actions"><a href="tel:+442012345678">+44 20 1234 5678</a><a class="instagram-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Inst</a><a href="#booking">Get a Cost Estimate</a></div>
   <button class="menu-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open navigation"><span></span><span></span></button>
   <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden>${navLinks.map(([label,id])=>`<a href="#${id}">${label}<span aria-hidden="true">↗</span></a>`).join('')}<a href="tel:+442012345678">Call the clinic</a></nav>
  </header>
  <div class="hero-copy"><h1 id="hero-title" aria-label="Dentistry you can trust"><span class="hero-title-row">Dentistry you</span><span class="hero-title-row hero-title-second"><span class="hero-can">can </span><span class="hero-trust">trust —</span></span></h1><p class="hero-family"><span class="hero-family-line">for the</span><span class="hero-family-line"><span class="hero-whole">whole</span> family</span></p></div>
  ${img(content.images.tooth,'','hero-tooth',true)}
  <div class="hero-aligner" aria-hidden="true">${img(content.images.aligner,'','',true)}</div>
  <p class="hero-description">Advanced European-level technology, painless treatment, and honest care from doctors you can genuinely rely on</p>
  ${button('Book a Consultation','hero-cta')}
 </section>
 <section id="about" class="section about" aria-labelledby="about-title">
  <div class="about-heading"><h2 id="about-title" aria-label="We treat you the way we would want to be treated"><span class="about-title-line"><span class="about-muted">We </span><span class="about-accent">treat you the way</span></span><span class="about-title-line"><span class="about-accent">we </span><span class="about-muted">would </span><span class="about-accent">want </span><span class="about-muted">to be </span><span class="about-accent">treated</span></span></h2><span class="eyebrow">Why trust us?</span></div>
  <div class="benefit-grid">${content.benefits.map((item,i)=>`<article class="benefit benefit-${i+1} reveal"><span class="card-number">0${i+1}</span><div><h3>${item.title}</h3><p>${item.body}</p></div></article>`).join('')}</div>
 </section>
 <section id="emergency" class="emergency" aria-labelledby="emergency-title">
  <svg class="cta-color-filter" width="0" height="0" aria-hidden="true" focusable="false"><defs><filter id="cta-image-tint" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0.4417106 -1.1176123 1.8391608 0 -0.1743938 -1.2626452 0.3189859 2.0458242 0 -0.0913921 -0.9378501 -0.7543423 3.0064783 0 -0.1272911 0 0 0 1 0"/></filter></defs></svg>
  <div class="emergency-art" aria-hidden="true">${img(content.images.emergency,'')}</div><div class="emergency-frost" aria-hidden="true"></div>
  <div class="emergency-copy"><h2 id="emergency-title" aria-label="If it hurts — we will see you today"><span class="cta-title-line"><span class="cta-muted">If it </span><span class="cta-accent">hurts —</span></span><span class="cta-title-line"><span class="cta-accent">we </span><span class="cta-muted">will </span><span class="cta-accent">see </span><span class="cta-muted">you </span><span class="cta-accent">today</span></span></h2><div class="emergency-badges"><span class="certified-badge">Certified endodontists</span><span class="experience-badge">10+ years of experience</span></div><ol>${content.emergency.map((line,i)=>`<li class="reveal"><span>0${i+1}</span>${line}</li>`).join('')}</ol>${button('Get Urgent Help','','Emergency appointment')}</div>
  <div class="emergency-visual"><p>We stop the pain in 15 minutes<br>Instant diagnostics, clear plan,<br>and immediate relief</p></div>
 </section>
 <section id="services" class="section services" aria-labelledby="services-title">
  <div class="section-heading"><h2 id="services-title" aria-label="Comprehensive dentistry for every need"><span class="services-title-line"><span class="services-accent">Comprehensive</span> <span class="services-muted">dentistry</span></span><span class="services-title-line"><span class="services-muted">for every </span><span class="services-accent">need</span></span></h2><p>From routine care to full smile transformations — everything in one modern clinic</p></div>
  <div class="service-grid" id="service-list">${content.services.map(service=>`<article class="service-card reveal"><div class="service-image">${img(service.image,service.title)}</div><h3>${escapeHtml(service.title)}</h3><p class="service-subtitle">${escapeHtml(service.subtitle)}</p><ul>${service.points.map(p=>`<li>${escapeHtml(p)}</li>`).join('')}</ul>${button(service.button,'outline',service.title)}</article>`).join('')}</div>
  <button class="button mobile-only expand-services" aria-expanded="false" aria-controls="service-list">View All</button>
 </section>
 <section id="results" class="section results" aria-labelledby="results-title">
  <div class="section-heading"><h2 id="results-title"><span class="results-title-line">Real results</span><span class="results-title-line"><span class="results-muted">from</span> real patients</span></h2><p>Only clinical cases —<br>no staged visuals</p><button class="button light" id="view-results">View More Results</button></div>
  <div class="result-grid">${content.results.map((result,i)=>`<article class="result-card reveal"><h3 class="sr-only">Patient result ${i+1}</h3><div><button class="result-image" data-result="${i}" data-side="before" aria-label="Enlarge before image, patient ${i+1}">${img(result.before,'Before dental treatment')}</button><span>Before</span></div><div><button class="result-image" data-result="${i}" data-side="after" aria-label="Enlarge after image, patient ${i+1}">${img(result.after,'After dental treatment')}</button><span>After</span></div></article>`).join('')}</div>
 </section>
 <section id="reviews" class="section reviews" aria-labelledby="reviews-title">
  <div class="review-stripes" aria-hidden="true"></div><h2 id="reviews-title"><span class="reviews-title-line">What patients say <span>about</span></span><span class="reviews-title-line reviews-muted">Nordent Clinic</span></h2>
  <div class="review-track" id="review-list" tabindex="0" aria-label="Patient reviews, scroll for more">${content.reviews.map(review=>`<figure class="review-card reveal"><span class="quote" aria-hidden="true">“</span><blockquote>${escapeHtml(review.body)}</blockquote><figcaption>${img(review.image,'')}<span>${review.name}</span></figcaption></figure>`).join('')}</div>
  <button class="button read-reviews" id="read-reviews" aria-haspopup="dialog">Read More Reviews</button>
  <p class="review-count" aria-hidden="true">Reviews <span>100+</span></p>
 </section>
 <section id="doctors" class="section doctors" aria-labelledby="doctors-title">
  <div class="section-heading"><h2 id="doctors-title"><span class="doctors-title-line">At Nordent Clinic, <span class="doctors-muted">you’re</span> cared for</span><span class="doctors-title-line"><span class="doctors-muted">by</span> specialists <span class="doctors-muted">you can truly</span> rely on</span></h2><p>All our doctors follow international clinical protocols and work as a team —<br>your treatment plan is always reviewed for accuracy and safety</p></div>
  <div class="doctor-grid">${content.doctors.map(doctor=>`<article class="doctor-card reveal">${img(doctor.image,doctor.name,'doctor-photo')}<div class="doctor-heading"><h3>${doctor.name}</h3><span>${doctor.role}</span></div><p>${doctor.experience}</p><p>${doctor.focus}</p><ul>${doctor.qualifications.map(q=>`<li>${escapeHtml(q)}</li>`).join('')}</ul>${button(doctor.button,'outline',doctor.name)}</article>`).join('')}</div>
 </section>
 <section id="prices" class="section prices" aria-labelledby="prices-title">
  <div class="prices-heading"><h2 id="prices-title"><span class="prices-title-line">You always know what you pay for,</span><span class="prices-title-line"><span class="prices-muted">why</span> it’s needed,</span><span class="prices-title-line"><span class="prices-muted">and what</span> result to expect</span></h2><div class="prices-collage" aria-hidden="true">${img('images/price-xray.png','')}${img('images/price-aligner.png','')}${img('images/price-brush.png','')}</div></div>
  <div class="price-grid" id="price-list">${content.prices.map((price,i)=>`<div class="price-row ${i>2?'extra-price':''}"><span>${escapeHtml(price.title)}</span><strong>${escapeHtml(price.price).replace(/(€[\d,]+)/,'<span class="price-amount">$1</span>')}</strong></div>`).join('')}</div>
  <button class="button outline mobile-only" id="all-prices" aria-controls="price-list" aria-expanded="false">View All Prices</button>
 </section>
 <section id="process" class="section process" aria-labelledby="process-title">
  <div class="section-heading"><h2 id="process-title"><span class="process-title-line"><span class="process-muted">Your</span> path <span class="process-muted">to a</span> healthy,</span><span class="process-title-line">beautiful smile</span></h2>${button('Start My Treatment Journey')}</div>
  <ol class="process-grid">${content.process.map((step,i)=>`<li class="process-card reveal">${img(step.image,'')}<h3>${step.title}</h3><span aria-hidden="true">0${i+1}</span></li>`).join('')}</ol>
 </section>
 <section id="location" class="section location" aria-labelledby="location-title"><div><h2 id="location-title"><span>We’re</span> easy to reach</h2><ul>${['Near public transport','Fast online booking','Friendly, English-speaking reception','Convenient working hours','Free on-site parking'].map(item=>`<li>${item}</li>`).join('')}</ul><div class="location-actions">${button('Book Online')}<a class="button outline" href="tel:+442012345678">Call Us</a></div></div><a class="location-image" href="https://www.google.com/maps/search/?api=1&query=21+Kensington+High+Street+London" target="_blank" rel="noopener noreferrer" aria-label="View clinic address in Google Maps">${img(content.images.location,'Map showing the clinic area')}</a></section>
 <section id="faq" class="section faq" aria-labelledby="faq-title"><div class="faq-intro"><h2 id="faq-title"><span class="faq-title-line">Frequently</span><span class="faq-title-line">Asked Questions</span></h2><span class="faq-decoration" aria-hidden="true">FAQ</span><p>In this section, you’ll find detailed answers<br>to the most common questions<br>about our dental treatments, procedures,<br>technology, pricing, and patient care.</p><p>We understand that choosing a dental clinic is an important decision, and feeling informed is essential for your comfort and confidence.</p></div><div class="faq-list">${content.faqs.map((faq,i)=>`<details ${i===0?'open':''}><summary>${faq.question}<span aria-hidden="true"></span></summary><div class="faq-answer"><p>${faq.answer}</p></div></details>`).join('')}</div></section>
 <section id="booking" class="section booking" aria-labelledby="booking-title"><span class="booking-decoration booking-decoration-top" aria-hidden="true">fill out</span><span class="booking-decoration booking-decoration-bottom" aria-hidden="true">the form</span><div class="booking-copy"><h2 id="booking-title"><span class="booking-title-line">Book <span class="booking-muted">your</span> visit</span><span class="booking-title-line"><span class="booking-muted">or</span> ask a question</span></h2><p>Leave your details — our <br>coordinator will contact you shortly <br>to confirm your appointment <br>or answer your questions.</p><div class="booking-tools" aria-hidden="true">${img('images/booking-tools.png','')}</div>${img(content.images.booking,'A patient holding clear dental aligners')}</div>
  <form class="booking-form"><div class="field"><label for="full-name">Full Name</label><input id="full-name" name="name" autocomplete="name" placeholder="Your Name" required minlength="2" maxlength="100"></div><div class="field"><label for="phone">Phone Number</label><input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="Phone" required minlength="6" maxlength="30"></div><div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" placeholder="Email" required maxlength="254"></div><div class="field"><label for="service">Preferred service</label><select id="service" name="service" required><option value="">Choose Service</option>${content.services.map(s=>`<option>${escapeHtml(s.title)}</option>`).join('')}<option>Emergency appointment</option>${content.doctors.map(d=>`<option>${d.name}</option>`).join('')}<option>General consultation</option></select></div><div class="field"><label for="appointment">Preferred appointment time</label><div class="appointment-control"><input id="appointment" name="appointment" type="datetime-local" required><span aria-hidden="true">Preferred appointment time</span></div></div><div class="field"><label for="message">Message <span>(optional)</span></label><textarea id="message" name="message" placeholder="Describe your concern" rows="2" maxlength="2000"></textarea></div><label class="consent"><input type="checkbox" name="consent" required><span>I agree to the processing of my personal data</span></label><button class="button" type="submit" aria-describedby="booking-form-note">Submit Request</button><p class="form-note" id="booking-form-note">Your email app will open with your request. Review and send it to complete your booking enquiry.</p><p id="form-status" role="status" aria-live="polite"></p></form>
 </section>
</main>
<footer class="section footer"><h2><span class="footer-title-line">Nordent Clinic —</span><span class="footer-title-line">dentistry you can trust</span></h2><div class="footer-socials" aria-label="Social media">${img('images/social-telegram.svg','Telegram')}${img('images/social-instagram.svg','Instagram')}${img('images/social-facebook.svg','Facebook')}</div><div class="footer-details"><nav aria-label="Footer navigation">${[['Why Trust Us','about'],['Services','services'],['Emergency','emergency'],['Results','results'],['Doctors','doctors'],['Prices','prices'],['Contact','booking']].map(([label,id])=>`<a href="#${id}">${label}</a>`).join('')}</nav><address><a href="tel:+442012345678">+44 20 1234 5678</a><a href="mailto:info@nordentclinic.com">info@nordentclinic.com</a><p>21 Kensington High Street, London, United Kingdom</p><p>Monday – Saturday: 9:00 AM – 7:00 PM<br>Sunday: by appointment only</p></address></div><div class="footer-wordmark" aria-hidden="true"><span class="footer-nordent">Nordent</span><span class="footer-clinic">Clinic</span></div><p class="copyright">© Nordent Clinic. All rights reserved</p></footer>
<dialog class="result-dialog" aria-labelledby="result-dialog-title"><div class="dialog-top"><h2 id="result-dialog-title">Patient results</h2><button class="round-button" id="close-result" aria-label="Close results">×</button></div><div id="dialog-images"></div><div class="dialog-controls"><button class="button outline" id="previous-result">Previous</button><button class="button" id="next-result">Next result</button></div></dialog>
<dialog class="reviews-dialog" aria-labelledby="reviews-dialog-title"><div class="dialog-top"><h2 id="reviews-dialog-title">Patient reviews</h2><button class="round-button" id="close-reviews" aria-label="Close reviews">×</button></div><div class="reviews-dialog-list">${content.reviews.map(review=>`<figure><blockquote>${escapeHtml(review.body)}</blockquote><figcaption>${img(review.image,'')}<span>${escapeHtml(review.name)}</span></figcaption></figure>`).join('')}</div></dialog>`;

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav')!;
function closeMenu() { menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Open navigation'); mobileNav.hidden = true; }
menuToggle.addEventListener('click', () => {
 const open = menuToggle.getAttribute('aria-expanded') !== 'true';
 menuToggle.setAttribute('aria-expanded',String(open)); menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation'); mobileNav.hidden = !open;
});
document.addEventListener('keydown', e => { if(e.key==='Escape') closeMenu(); });
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{if(!menuToggle.contains(e.target as Node)&&!mobileNav.contains(e.target as Node))closeMenu();});
window.matchMedia('(min-width: 1000px)').addEventListener('change',closeMenu);

document.querySelectorAll<HTMLAnchorElement>('[data-service]').forEach(link=>link.addEventListener('click',()=>{
 document.querySelector<HTMLSelectElement>('#service')!.value=link.dataset.service!;
}));
document.querySelector('.expand-services')!.addEventListener('click',e=>{
 const button=e.currentTarget as HTMLButtonElement;const expanded=button.getAttribute('aria-expanded')!=='true';
 button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'Show Less':'View All';document.querySelector('#service-list')!.classList.toggle('expanded',expanded);ScrollTrigger.refresh();
});
document.querySelector('#all-prices')!.addEventListener('click',e=>{
 const button=e.currentTarget as HTMLButtonElement;const expanded=button.getAttribute('aria-expanded')!=='true';
 button.setAttribute('aria-expanded',String(expanded));button.textContent=expanded?'Show Less':'View All Prices';document.querySelector('#price-list')!.classList.toggle('expanded',expanded);ScrollTrigger.refresh();
});

const dialog=document.querySelector<HTMLDialogElement>('.result-dialog')!;let resultIndex=0;let dialogTrigger:HTMLElement|null=null;
function showResult(index:number){resultIndex=(index+content.results.length)%content.results.length;const result=content.results[resultIndex];document.querySelector('#dialog-images')!.innerHTML=`<figure>${img(result.before,'Before treatment')}<figcaption>Before</figcaption></figure><figure>${img(result.after,'After treatment')}<figcaption>After</figcaption></figure>`;document.querySelector('#result-dialog-title')!.textContent=`Patient results ${resultIndex+1} / ${content.results.length}`;}
function openResult(index:number,trigger:HTMLElement){dialogTrigger=trigger;showResult(index);dialog.showModal();document.body.classList.add('dialog-open');}
document.querySelectorAll<HTMLButtonElement>('[data-result]').forEach(button=>button.addEventListener('click',()=>openResult(Number(button.dataset.result),button)));
document.querySelector<HTMLButtonElement>('#view-results')!.addEventListener('click',e=>openResult(0,e.currentTarget as HTMLElement));
document.querySelector('#next-result')!.addEventListener('click',()=>showResult(resultIndex+1));document.querySelector('#previous-result')!.addEventListener('click',()=>showResult(resultIndex-1));
document.querySelector('#close-result')!.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');dialogTrigger?.focus();});

const reviewsDialog=document.querySelector<HTMLDialogElement>('.reviews-dialog')!;
const readReviews=document.querySelector<HTMLButtonElement>('#read-reviews')!;
readReviews.addEventListener('click',()=>{reviewsDialog.showModal();document.body.classList.add('dialog-open');});
document.querySelector('#close-reviews')!.addEventListener('click',()=>reviewsDialog.close());
reviewsDialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');readReviews.focus();});
reviewsDialog.addEventListener('click',e=>{if(e.target===reviewsDialog){const r=reviewsDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)reviewsDialog.close();}});
const faqDetails=Array.from(document.querySelectorAll<HTMLDetailsElement>('.faq-list details'));
const faqExpanded=new Map(faqDetails.map(detail=>[detail,detail.open]));
const reducedFaqMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
function finishFaq(detail:HTMLDetailsElement){
 gsap.killTweensOf(detail);
 detail.open=faqExpanded.get(detail)===true;
 detail.classList.remove('is-closing');
 gsap.set(detail,{clearProps:'height,overflow'});
 ScrollTrigger.refresh();
}
function setFaqExpanded(detail:HTMLDetailsElement,expanded:boolean){
 const start=detail.getBoundingClientRect().height;
 gsap.killTweensOf(detail);
 faqExpanded.set(detail,expanded);
 const summary=detail.querySelector('summary')!;
 summary.setAttribute('aria-expanded',String(expanded));
 detail.classList.toggle('is-closing',!expanded);
 if(reducedFaqMotion.matches){finishFaq(detail);return;}
 detail.style.height='auto';
 detail.open=true;
 const end=expanded?detail.getBoundingClientRect().height:summary.getBoundingClientRect().height;
 gsap.set(detail,{height:start,overflow:'hidden'});
 gsap.to(detail,{height:end,duration:.55,ease:'power2.inOut',onComplete:()=>finishFaq(detail)});
}
faqDetails.forEach(detail=>{
 const summary=detail.querySelector('summary')!;
 summary.setAttribute('aria-expanded',String(detail.open));
 summary.addEventListener('click',event=>{
  event.preventDefault();
  const expanded=!faqExpanded.get(detail);
  if(expanded)faqDetails.forEach(other=>{if(other!==detail&&faqExpanded.get(other))setFaqExpanded(other,false);});
  setFaqExpanded(detail,expanded);
 });
});
reducedFaqMotion.addEventListener('change',()=>faqDetails.forEach(finishFaq));
window.addEventListener('resize',()=>faqDetails.forEach(finishFaq));

const appointment=document.querySelector<HTMLInputElement>('#appointment')!;
const now=new Date();now.setMinutes(now.getMinutes()-now.getTimezoneOffset());appointment.min=now.toISOString().slice(0,16);
const form=document.querySelector<HTMLFormElement>('.booking-form')!;
form.addEventListener('submit',e=>{
 e.preventDefault();if(!form.reportValidity())return;
 if(new Date(appointment.value).getTime()<Date.now()){appointment.setCustomValidity('Please choose a future appointment time.');appointment.reportValidity();return;}
 const values=new FormData(form);const body=['Appointment enquiry',`Name: ${values.get('name')}`,`Phone: ${values.get('phone')}`,`Email: ${values.get('email')}`,`Preferred service: ${values.get('service')}`,`Preferred time: ${values.get('appointment')}`,`Message: ${values.get('message')||'—'}`].join('\n');
 window.location.href=`mailto:info@nordentclinic.com?subject=${encodeURIComponent('Appointment request — Nordent Clinic')}&body=${encodeURIComponent(body)}`;
 document.querySelector('#form-status')!.textContent='Your request is ready in your email app. Please send the email to finish. If it did not open, call +44 20 1234 5678.';
});
appointment.addEventListener('input',()=>{appointment.setCustomValidity('');appointment.parentElement!.classList.toggle('has-value',Boolean(appointment.value));});

// MatchMedia reverts animations if the visitor changes their motion preference.
const motion=gsap.matchMedia();
motion.add('(prefers-reduced-motion: no-preference)',()=>{
 const intro=gsap.timeline({defaults:{ease:'power3.out'}});
 intro.from('.header',{y:-18,opacity:0,duration:0.7}).from('.hero-copy',{y:26,opacity:0,duration:0.9},'-=0.3').from('.hero-tooth',{x:32,opacity:0,duration:1.4},'-=0.75').from('.hero-aligner',{x:-24,opacity:0,duration:1.3},'<0.1').from('.hero-description',{y:16,opacity:0,duration:0.65},'-=0.6').from('.hero-cta',{opacity:0,duration:0.65},'<0.12');
 const cards=gsap.utils.toArray<HTMLElement>('.reveal, .location-image, .booking-form').filter(el=>!el.closest('#about, #results, #reviews, #prices, #faq'));
 const animations=new Map<HTMLElement,gsap.core.Tween>();
 cards.forEach(el=>{
  const siblings=Array.from(el.parentElement?.children||[]).filter(child=>cards.includes(child as HTMLElement));
  const row=siblings.filter(child=>Math.abs((child as HTMLElement).offsetTop-el.offsetTop)<4);
  const position=row.indexOf(el);
  animations.set(el,gsap.from(el,{y:24,opacity:0,duration:.7,delay:Math.max(0,position)*.07,ease:'power2.out',clearProps:'transform,opacity',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
 });
 // A keyboard user can focus an offscreen card before its scroll trigger fires.
 const revealFocusedCard=(event:FocusEvent)=>{
  const target=event.target as HTMLElement;
  for(const [card,animation]of animations)if(card.contains(target))animation.progress(1);
 };
 document.addEventListener('focusin',revealFocusedCard);
 return ()=>{intro.kill();document.removeEventListener('focusin',revealFocusedCard);};
});
window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});

