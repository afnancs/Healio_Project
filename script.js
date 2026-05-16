/*<<<<<<< HEAD
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

const bookBtn = document.querySelector('.book-btn');
if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('.top-doctors');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', function () {
    console.log('Navigating to: ' + this.getAttribute('href'));
  });
});

function bookDoctor(name, specialty, img) {
  localStorage.setItem('docName', name);
  localStorage.setItem('docSpecialty', specialty);
  localStorage.setItem('docImg', img);
  window.location.href = 'doctor-details.html';
}

window.bookDoctor = bookDoctor; */
// 1. تحديد اللينك النشط بناءً على الصفحة الحالية
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    // إذا كان رابط اللينك يطابق اسم الملف الحالي
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
        link.classList.add('active');
    }
});

// 3. تفعيل زرار "Book Appointment"
const bookBtn = document.querySelector('.book-btn');
if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // ينزل لسكشن الأطباء بسلاسة
        document.querySelector('.top-doctors').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    // كود بسيط للتأكد من أن اللينكات تعمل
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log("Navigating to: " + this.getAttribute('href'));
    });
});

// 1. الانتقال من اختيار الدكتور لصفحة التفاصيل
function viewDoctorDetails(name, img) {
    localStorage.setItem('selectedDocName', name);
    localStorage.setItem('selectedDocImg', img);
    window.location.href = 'doctor-details.html';
}

// 2. من صفحة التفاصيل لصفحة الحجز النهائية
function startBookingProcess() {
    // هنا ممكن تفتحي Modal أو صفحة صغيرة لإدخال الاسم
    const name = prompt("Please enter your name to confirm booking:");
    if (name) {
        localStorage.setItem('patientName', name);
        window.location.href = 'payment.html';
    }
}

// كود لتحديد الأيام والساعات (UI)
document.querySelectorAll('.slot-day, .slot-time').forEach(item => {
    item.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
    });
});

function saveAccount() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    if (name && email) {
        // تخزين البيانات في المتصفح
        localStorage.setItem('storedName', name);
        alert("Account Created: " + name);
        // التحويل لصفحة البداية
        window.location.href = "index.html"; 
    } else {
        alert("Please fill in your details");
    }
}

// وظيفة تشغلينها لما تدوسي على الكارت
function bookDoctor(name, specialty, img) {
    localStorage.setItem('docName', name);
    localStorage.setItem('docSpecialty', specialty);
    localStorage.setItem('docImg', img);
    window.location.href = 'doctor-details.html';
}

// هنفترض إن دي بيانات الدكتور اللي جاية من الداتابيز
const doctorLat = 30.0444; // مثال لإحداثيات القاهرة
const doctorLng = 31.2357;

document.getElementById('open-map').addEventListener('click', function() {
    // لينك جوجل ماب العالمي باستخدام الإحداثيات
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${doctorLat},${doctorLng}`;
    
    // فتح اللينك في صفحة جديدة
    window.open(mapUrl, '_blank');
});

}
if (userRole === 'admin') {
    window.location.href = 'admin.html';
} else {
    window.location.href = 'index.html';
}


