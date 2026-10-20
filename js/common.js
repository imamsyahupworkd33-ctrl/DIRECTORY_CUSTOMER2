function showToast(message, type = "info") {
    let stack = document.getElementById("toastStack");
    if (!stack) {
        stack = document.createElement("div");
        stack.id = "toastStack";
        stack.className = "toast-stack";
        document.body.appendChild(stack);
    }
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerText = message;
    stack.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transition = "opacity .2s ease";
        setTimeout(() => toast.remove(), 200);
    }, 2800);
}

function showFormMsg(elId, message, type) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = message;
    el.className = `form-msg show ${type}`;
}

function clearFormMsg(elId) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.className = "form-msg";
}

function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function togglePasswordField(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        btnEl.textContent = "🙈";
    } else {
        input.type = "password";
        btnEl.textContent = "👁️";
    }
}

function getSession() {
    return localStorage.getItem("pelanggan_session_token");
}

function requireSessionOrRedirect() {
    const token = getSession();
    if (!token) {
        window.location.href = "index.html";
        return null;
    }
    return token;
}

function clearSession() {
    localStorage.removeItem("pelanggan_session_token");
    localStorage.removeItem("pelanggan_username");
}
