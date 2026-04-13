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

}