/* ============================================================
   إعدادات المنصة – ملف مشترك بين الصفحة الرئيسية وصفحة المستودع
   لإضافة مستودع جديد: انسخ سطرًا في القائمة المناسبة وعدّله.
   ============================================================ */
const CONFIG = {
  owner: "amir-amara",
  allowedEmail: "amir.amara@gmail.com",
  // ضع هنا Client ID من Google Cloud Console (ينتهي بـ .apps.googleusercontent.com)
  googleClientId: "PASTE_YOUR_GOOGLE_CLIENT_ID_HERE"
};

const PUBLIC_REPOS = [
  { repo:"biotech-worksheets", icon:"📝", title:"أوراق العمل",
    desc:"أوراق عمل البيوتكنولوجيا للصفوف العاشر – الثاني عشر، مرتبة حسب الصف والموضوع." },
  { repo:"interactive-pages", icon:"✨", title:"الصفحات التفاعلية",
    desc:"صفحات دراسة حيّة وتفاعلية بأسلوب دفتر الطالب، تعمل على الهاتف مباشرة." },
  { repo:"crispr-3d-book", icon:"🧬", title:"كتاب CRISPR ثلاثي الأبعاد",
    desc:"كتاب تعليمي تفاعلي بتقليب صفحات ونموذج ثلاثي الأبعاد لتقنية CRISPR." }
];

const PRIVATE_REPOS = [
  { repo:"biotech-exams", icon:"📄", title:"الامتحانات ومفاتيح الإجابة",
    desc:"الامتحانات الشهرية والفصلية، نسخ المعلم، والمחוון." }
];

/* أسماء عربية للمجلدات الشائعة (تُستعمل في صفحة المستودع) */
const FOLDER_NAMES = {
  "grade-10":"الصف العاشر", "grade-11":"الصف الحادي عشر", "grade-12":"الصف الثاني عشر",
  "genetic-engineering":"الهندسة الوراثية", "cells":"الخلية", "dna":"DNA",
  "proteins":"البروتينات", "enzymes":"الإنزيمات", "microbiology":"الأحياء الدقيقة",
  "apps":"تطبيقات", "exams":"امتحانات", "worksheets":"أوراق عمل"
};
