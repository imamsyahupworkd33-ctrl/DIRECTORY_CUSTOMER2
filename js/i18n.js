/**
 * Multi-bahasa portal pelanggan: Indonesia (id), English (en),
 * Tiếng Việt (vi), العربية (ar — otomatis tampil RTL).
 * Pilihan bahasa disimpan di localStorage, jadi tetap terpakai
 * saat pindah halaman (login <-> dashboard).
 */
const TRANSLATIONS = {
    id: {
        brand_title: "Portal Pelanggan",
        brand_sub: "Monitoring langganan harian Anda",
        label_username: "Username",
        placeholder_username: "cth. Pelanggan 88",
        label_password: "Password",
        placeholder_password: "Password Anda",
        btn_login: "Masuk",
        btn_processing: "Memproses...",
        forgot_note: "Lupa password? Hubungi admin untuk direset.",
        err_fill_fields: "Isi username dan password terlebih dahulu",
        err_login_generic: "Username atau password salah",
        err_account_locked: "Akun terkunci sementara karena terlalu banyak percobaan gagal. Coba lagi nanti.",

        greet_prefix: "Halo",
        greet_sub: "Ringkasan langganan harian milik Anda",
        btn_change_password: "Ganti Password",
        btn_logout: "Keluar",
        change_password_title: "Ganti Password",
        label_old_password: "Password Lama",
        label_new_password: "Password Baru (minimal 6 karakter)",
        btn_save_password: "Simpan Password Baru",
        err_fill_both_passwords: "Isi password lama dan password baru",
        err_password_min: "Password baru minimal 6 karakter",
        err_old_password_wrong: "Password lama salah",
        err_change_password_failed: "Gagal mengganti password",
        success_password_changed: "Password berhasil diganti",

        summary_active: "Langganan Aktif",
        summary_delivered: "Total Hari Terkirim",
        summary_total: "Total Hari Paket",
        summary_limit_reached: "Limit Tercapai",
        summary_limit_tomorrow: "Akan Limit Besok",
        hint_click_filter: "Klik untuk filter",
        hint_click_list: "Klik untuk lihat daftar",

        detail_title: "Detail Langganan Anda",
        filter_showing_limit: "Menampilkan hanya langganan yang sudah limit",
        filter_reset: "Tampilkan Semua",
        loading_orders: "Memuat data langganan...",
        empty_orders_title: "Belum ada data langganan aktif",
        empty_orders_sub: "Hubungi admin jika Anda merasa ini keliru.",
        empty_filter_title: "Tidak ada langganan yang limit",
        empty_filter_sub: "Semua langganan Anda masih berjalan.",

        status_proses: "Proses",
        status_mendekati: "Mendekati Limit",
        status_selesai: "Limit Tercapai",
        checked_today: "Sudah dicatat hari ini",
        not_checked_today: "Belum dicatat hari ini",
        remaining_days: "Sisa {n} hari",
        done_label: "Selesai",
        day_progress: "H{a} / H{b} hari ({p}%)",

        initial_add: "+ Tambah nama inisial",
        initial_edit_title: "Ubah nama inisial",
        initial_placeholder: "Nama inisial (maks. 30 karakter)",
        initial_save: "Simpan",
        initial_cancel: "Batal",
        initial_saved: "Nama inisial disimpan",
        initial_failed: "Gagal menyimpan nama inisial",

        modal_tomorrow_title: "Langganan yang Akan Limit Besok",
        modal_tomorrow_sub: "Tagar berikut hanya butuh 1 hari lagi untuk mencapai limit.",
        modal_tomorrow_empty: "Tidak ada langganan yang akan limit besok 🎉",
        modal_close: "Tutup",
        col_initial: "Inisial",
        col_tagar: "Tagar",
        col_dashboard: "Dashboard",
        col_progress: "Progress",

        err_session_expired: "Sesi login habis, silakan login ulang",
        err_load_orders_failed: "Gagal memuat data langganan",
        lang_label: "Bahasa",
        search_placeholder: "Cari tagar langganan Anda...",
        search_found: "✅ Tagar terdata — ditemukan {n} langganan yang cocok.",
        search_none: "❌ Tagar \"{q}\" belum terdata di langganan Anda.",
        search_clear: "Hapus pencarian",
        tab_home: "Beranda", tab_supply: "Supply & Stock", tab_archive: "Arsip Saya",
        ann_important: "Penting",
        kpi_all_orders: "Total Pesanan", kpi_since: "Mulai Memesan", kpi_archived: "Pesanan Diarsipkan", kpi_supply_orders: "Order Supply",
        chart_monthly: "Pesanan per Bulan", chart_composition: "Pesanan per Dashboard", chart_status: "Status Langganan Aktif",
        supply_title: "Supply & Stock", supply_sub: "Stok tersedia saat ini. Masukkan jumlah yang Anda inginkan lalu kirim pesanan.",
        supply_stock: "Stok", supply_updated: "Diperbarui", supply_qty_ph: "Jumlah", supply_order_btn: "Pesan",
        supply_empty: "Belum ada stok yang ditampilkan.", supply_my_orders: "Pesanan Supply Saya",
        supply_status_pending: "Menunggu", supply_status_sent: "Terkirim", supply_cancel: "Batalkan",
        supply_ordered_ok: "Pesanan terkirim ke admin", supply_out: "Stok habis", supply_qty_err: "Masukkan jumlah yang valid",
        supply_no_orders: "Belum ada pesanan supply.", supply_confirm: "Kirim pesanan {q} {u} untuk {i}?",
        archive_title: "Arsip Pesanan Saya", archive_sub: "Riwayat pesanan lama yang sudah diarsipkan admin.",
        archive_empty: "Belum ada arsip pesanan.", archive_archived_on: "Diarsipkan", col_date: "Tanggal", col_item: "Barang", col_qty: "Jumlah", col_status: "Status", col_days: "Hari"
    },

    en: {
        brand_title: "Customer Portal",
        brand_sub: "Monitor your daily subscriptions",
        label_username: "Username",
        placeholder_username: "e.g. Pelanggan 88",
        label_password: "Password",
        placeholder_password: "Your password",
        btn_login: "Log In",
        btn_processing: "Processing...",
        forgot_note: "Forgot your password? Contact the admin to reset it.",
        err_fill_fields: "Please enter your username and password",
        err_login_generic: "Incorrect username or password",
        err_account_locked: "Account temporarily locked due to too many failed attempts. Please try again later.",

        greet_prefix: "Hello",
        greet_sub: "Summary of your daily subscriptions",
        btn_change_password: "Change Password",
        btn_logout: "Log Out",
        change_password_title: "Change Password",
        label_old_password: "Current Password",
        label_new_password: "New Password (at least 6 characters)",
        btn_save_password: "Save New Password",
        err_fill_both_passwords: "Enter your current and new password",
        err_password_min: "New password must be at least 6 characters",
        err_old_password_wrong: "Current password is incorrect",
        err_change_password_failed: "Failed to change password",
        success_password_changed: "Password changed successfully",

        summary_active: "Active Subscriptions",
        summary_delivered: "Total Days Delivered",
        summary_total: "Total Package Days",
        summary_limit_reached: "Limit Reached",
        summary_limit_tomorrow: "Reaching Limit Tomorrow",
        hint_click_filter: "Click to filter",
        hint_click_list: "Click to view list",

        detail_title: "Your Subscription Details",
        filter_showing_limit: "Showing only subscriptions that reached the limit",
        filter_reset: "Show All",
        loading_orders: "Loading subscription data...",
        empty_orders_title: "No active subscriptions yet",
        empty_orders_sub: "Contact the admin if you think this is a mistake.",
        empty_filter_title: "No subscriptions have reached the limit",
        empty_filter_sub: "All your subscriptions are still running.",

        status_proses: "In Progress",
        status_mendekati: "Near Limit",
        status_selesai: "Limit Reached",
        checked_today: "Recorded today",
        not_checked_today: "Not recorded today",
        remaining_days: "{n} days left",
        done_label: "Completed",
        day_progress: "D{a} / D{b} days ({p}%)",

        initial_add: "+ Add initials",
        initial_edit_title: "Edit initials",
        initial_placeholder: "Initials (max. 30 characters)",
        initial_save: "Save",
        initial_cancel: "Cancel",
        initial_saved: "Initials saved",
        initial_failed: "Failed to save initials",

        modal_tomorrow_title: "Subscriptions Reaching Limit Tomorrow",
        modal_tomorrow_sub: "These tags need just 1 more day to reach their limit.",
        modal_tomorrow_empty: "No subscriptions reach the limit tomorrow 🎉",
        modal_close: "Close",
        col_initial: "Initials",
        col_tagar: "Tag",
        col_dashboard: "Dashboard",
        col_progress: "Progress",

        err_session_expired: "Your session has expired, please log in again",
        err_load_orders_failed: "Failed to load subscription data",
        lang_label: "Language",
        search_placeholder: "Search your subscription tags...",
        search_found: "✅ Tag is registered — {n} matching subscription(s) found.",
        search_none: "❌ Tag \"{q}\" is not registered in your subscriptions.",
        search_clear: "Clear search",
        tab_home: "Home", tab_supply: "Supply & Stock", tab_archive: "My Archive",
        ann_important: "Important",
        kpi_all_orders: "Total Orders", kpi_since: "Ordering Since", kpi_archived: "Archived Orders", kpi_supply_orders: "Supply Orders",
        chart_monthly: "Orders per Month", chart_composition: "Orders per Dashboard", chart_status: "Active Subscription Status",
        supply_title: "Supply & Stock", supply_sub: "Current available stock. Enter the quantity you want and send your order.",
        supply_stock: "Stock", supply_updated: "Updated", supply_qty_ph: "Qty", supply_order_btn: "Order",
        supply_empty: "No stock is listed yet.", supply_my_orders: "My Supply Orders",
        supply_status_pending: "Pending", supply_status_sent: "Sent", supply_cancel: "Cancel",
        supply_ordered_ok: "Order sent to admin", supply_out: "Out of stock", supply_qty_err: "Enter a valid quantity",
        supply_no_orders: "No supply orders yet.", supply_confirm: "Send an order of {q} {u} for {i}?",
        archive_title: "My Order Archive", archive_sub: "History of old orders archived by the admin.",
        archive_empty: "No archived orders yet.", archive_archived_on: "Archived", col_date: "Date", col_item: "Item", col_qty: "Qty", col_status: "Status", col_days: "Days"
    },

    vi: {
        brand_title: "Cổng Khách Hàng",
        brand_sub: "Theo dõi gói đăng ký hằng ngày của bạn",
        label_username: "Tên đăng nhập",
        placeholder_username: "vd. Pelanggan 88",
        label_password: "Mật khẩu",
        placeholder_password: "Mật khẩu của bạn",
        btn_login: "Đăng nhập",
        btn_processing: "Đang xử lý...",
        forgot_note: "Quên mật khẩu? Vui lòng liên hệ quản trị viên để đặt lại.",
        err_fill_fields: "Vui lòng nhập tên đăng nhập và mật khẩu",
        err_login_generic: "Tên đăng nhập hoặc mật khẩu không đúng",
        err_account_locked: "Tài khoản tạm thời bị khóa do nhập sai quá nhiều lần. Vui lòng thử lại sau.",

        greet_prefix: "Xin chào",
        greet_sub: "Tổng quan các gói đăng ký hằng ngày của bạn",
        btn_change_password: "Đổi mật khẩu",
        btn_logout: "Đăng xuất",
        change_password_title: "Đổi mật khẩu",
        label_old_password: "Mật khẩu hiện tại",
        label_new_password: "Mật khẩu mới (tối thiểu 6 ký tự)",
        btn_save_password: "Lưu mật khẩu mới",
        err_fill_both_passwords: "Nhập mật khẩu hiện tại và mật khẩu mới",
        err_password_min: "Mật khẩu mới phải có ít nhất 6 ký tự",
        err_old_password_wrong: "Mật khẩu hiện tại không đúng",
        err_change_password_failed: "Đổi mật khẩu thất bại",
        success_password_changed: "Đổi mật khẩu thành công",

        summary_active: "Gói đang hoạt động",
        summary_delivered: "Tổng số ngày đã giao",
        summary_total: "Tổng số ngày của gói",
        summary_limit_reached: "Đã đạt giới hạn",
        summary_limit_tomorrow: "Sắp đạt giới hạn ngày mai",
        hint_click_filter: "Nhấn để lọc",
        hint_click_list: "Nhấn để xem danh sách",

        detail_title: "Chi tiết gói đăng ký của bạn",
        filter_showing_limit: "Chỉ hiển thị các gói đã đạt giới hạn",
        filter_reset: "Hiển thị tất cả",
        loading_orders: "Đang tải dữ liệu đăng ký...",
        empty_orders_title: "Chưa có gói đăng ký nào đang hoạt động",
        empty_orders_sub: "Hãy liên hệ quản trị viên nếu bạn thấy có nhầm lẫn.",
        empty_filter_title: "Không có gói nào đạt giới hạn",
        empty_filter_sub: "Tất cả gói của bạn vẫn đang chạy.",

        status_proses: "Đang chạy",
        status_mendekati: "Gần đạt giới hạn",
        status_selesai: "Đã đạt giới hạn",
        checked_today: "Đã ghi nhận hôm nay",
        not_checked_today: "Chưa ghi nhận hôm nay",
        remaining_days: "Còn {n} ngày",
        done_label: "Hoàn tất",
        day_progress: "N{a} / N{b} ngày ({p}%)",

        initial_add: "+ Thêm tên viết tắt",
        initial_edit_title: "Sửa tên viết tắt",
        initial_placeholder: "Tên viết tắt (tối đa 30 ký tự)",
        initial_save: "Lưu",
        initial_cancel: "Hủy",
        initial_saved: "Đã lưu tên viết tắt",
        initial_failed: "Lưu tên viết tắt thất bại",

        modal_tomorrow_title: "Các gói sắp đạt giới hạn vào ngày mai",
        modal_tomorrow_sub: "Các thẻ dưới đây chỉ cần thêm 1 ngày nữa là đạt giới hạn.",
        modal_tomorrow_empty: "Không có gói nào đạt giới hạn vào ngày mai 🎉",
        modal_close: "Đóng",
        col_initial: "Viết tắt",
        col_tagar: "Thẻ",
        col_dashboard: "Bảng điều khiển",
        col_progress: "Tiến độ",

        err_session_expired: "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại",
        err_load_orders_failed: "Không tải được dữ liệu đăng ký",
        lang_label: "Ngôn ngữ",
        search_placeholder: "Tìm thẻ đăng ký của bạn...",
        search_found: "✅ Thẻ đã được ghi nhận — tìm thấy {n} gói phù hợp.",
        search_none: "❌ Thẻ \"{q}\" chưa được ghi nhận trong các gói của bạn.",
        search_clear: "Xóa tìm kiếm"
    },

    ar: {
        brand_title: "بوابة العملاء",
        brand_sub: "تابع اشتراكاتك اليومية",
        label_username: "اسم المستخدم",
        placeholder_username: "مثال: Pelanggan 88",
        label_password: "كلمة المرور",
        placeholder_password: "كلمة المرور الخاصة بك",
        btn_login: "تسجيل الدخول",
        btn_processing: "جارٍ المعالجة...",
        forgot_note: "نسيت كلمة المرور؟ تواصل مع المسؤول لإعادة تعيينها.",
        err_fill_fields: "الرجاء إدخال اسم المستخدم وكلمة المرور",
        err_login_generic: "اسم المستخدم أو كلمة المرور غير صحيحة",
        err_account_locked: "تم قفل الحساب مؤقتًا بسبب كثرة المحاولات الفاشلة. حاول مرة أخرى لاحقًا.",

        greet_prefix: "مرحبًا",
        greet_sub: "ملخص اشتراكاتك اليومية",
        btn_change_password: "تغيير كلمة المرور",
        btn_logout: "تسجيل الخروج",
        change_password_title: "تغيير كلمة المرور",
        label_old_password: "كلمة المرور الحالية",
        label_new_password: "كلمة المرور الجديدة (6 أحرف على الأقل)",
        btn_save_password: "حفظ كلمة المرور الجديدة",
        err_fill_both_passwords: "أدخل كلمة المرور الحالية والجديدة",
        err_password_min: "يجب أن تتكون كلمة المرور الجديدة من 6 أحرف على الأقل",
        err_old_password_wrong: "كلمة المرور الحالية غير صحيحة",
        err_change_password_failed: "فشل تغيير كلمة المرور",
        success_password_changed: "تم تغيير كلمة المرور بنجاح",

        summary_active: "الاشتراكات النشطة",
        summary_delivered: "إجمالي الأيام المُسلَّمة",
        summary_total: "إجمالي أيام الباقة",
        summary_limit_reached: "بلغت الحد",
        summary_limit_tomorrow: "ستبلغ الحد غدًا",
        hint_click_filter: "انقر للتصفية",
        hint_click_list: "انقر لعرض القائمة",

        detail_title: "تفاصيل اشتراكاتك",
        filter_showing_limit: "عرض الاشتراكات التي بلغت الحد فقط",
        filter_reset: "عرض الكل",
        loading_orders: "جارٍ تحميل بيانات الاشتراك...",
        empty_orders_title: "لا توجد اشتراكات نشطة بعد",
        empty_orders_sub: "تواصل مع المسؤول إذا كنت تعتقد أن هناك خطأ.",
        empty_filter_title: "لا توجد اشتراكات بلغت الحد",
        empty_filter_sub: "جميع اشتراكاتك لا تزال جارية.",

        status_proses: "قيد التنفيذ",
        status_mendekati: "قريب من الحد",
        status_selesai: "بلغ الحد",
        checked_today: "تم التسجيل اليوم",
        not_checked_today: "لم يتم التسجيل اليوم",
        remaining_days: "متبقي {n} يوم",
        done_label: "مكتمل",
        day_progress: "ي{a} / ي{b} يوم ({p}%)",

        initial_add: "+ إضافة اسم مختصر",
        initial_edit_title: "تعديل الاسم المختصر",
        initial_placeholder: "الاسم المختصر (30 حرفًا كحد أقصى)",
        initial_save: "حفظ",
        initial_cancel: "إلغاء",
        initial_saved: "تم حفظ الاسم المختصر",
        initial_failed: "فشل حفظ الاسم المختصر",

        modal_tomorrow_title: "الاشتراكات التي ستبلغ الحد غدًا",
        modal_tomorrow_sub: "هذه الوسوم تحتاج يومًا واحدًا فقط لبلوغ الحد.",
        modal_tomorrow_empty: "لا توجد اشتراكات ستبلغ الحد غدًا 🎉",
        modal_close: "إغلاق",
        col_initial: "الاسم المختصر",
        col_tagar: "الوسم",
        col_dashboard: "اللوحة",
        col_progress: "التقدم",

        err_session_expired: "انتهت جلسة تسجيل الدخول، يرجى تسجيل الدخول مرة أخرى",
        err_load_orders_failed: "فشل تحميل بيانات الاشتراك",
        lang_label: "اللغة",
        search_placeholder: "ابحث في وسوم اشتراكاتك...",
        search_found: "✅ الوسم مسجّل — تم العثور على {n} اشتراك مطابق.",
        search_none: "❌ الوسم \"{q}\" غير مسجّل في اشتراكاتك.",
        search_clear: "مسح البحث"
    }
};

// Pesan error dari server (SQL) ditulis dalam bahasa Indonesia; dipetakan ke kunci terjemahan.
const SERVER_ERROR_MAP = {
    "Sesi login tidak valid atau sudah habis, silakan login ulang": "err_session_expired",
    "Username atau password salah": "err_login_generic",
    "Password lama salah": "err_old_password_wrong",
    "Password baru minimal 6 karakter": "err_password_min",
    "Akun terkunci sementara karena terlalu banyak percobaan gagal. Coba lagi nanti.": "err_account_locked"
};

const SUPPORTED_LANGS = ["id", "en", "vi", "ar"];
let currentLang = localStorage.getItem("pelanggan_lang");
if (!SUPPORTED_LANGS.includes(currentLang)) currentLang = "id";

function t(key, vars) {
    let text = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
        || TRANSLATIONS.id[key]
        || key;
    if (vars) {
        Object.keys(vars).forEach(k => {
            text = text.replaceAll(`{${k}}`, vars[k]);
        });
    }
    return text;
}

function translateServerError(message) {
    const key = SERVER_ERROR_MAP[message];
    return key ? t(key) : message;
}

function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
        el.title = t(el.dataset.i18nTitle);
    });
    document.querySelectorAll(".lang-switch button").forEach(b => {
        b.classList.toggle("active", b.dataset.lang === currentLang);
    });
}

function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem("pelanggan_lang", lang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent("langchange"));
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-switch button").forEach(b => {
        b.addEventListener("click", () => setLanguage(b.dataset.lang));
    });
    applyTranslations();
});
