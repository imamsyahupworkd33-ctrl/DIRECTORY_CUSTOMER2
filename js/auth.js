document.addEventListener("DOMContentLoaded", () => {
    // Kalau sudah login, langsung lempar ke dashboard
    if (getSession()) {
        window.location.href = "dashboard.html";
        return;
    }

    const loginBtn = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("loginUsername");
    const passwordInput = document.getElementById("loginPassword");

    async function doLogin() {
        clearFormMsg("loginMsg");
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username || !password) {
            showFormMsg("loginMsg", t("err_fill_fields"), "error");
            return;
        }

        loginBtn.disabled = true;
        loginBtn.textContent = t("btn_processing");

        const { data, error } = await supabaseClient.rpc("customer_login", {
            p_username: username,
            p_password: password
        });

        loginBtn.disabled = false;
        loginBtn.textContent = t("btn_login");

        if (error || !data || data.length === 0) {
            showFormMsg("loginMsg", translateServerError(error?.message) || t("err_login_generic"), "error");
            return;
        }

        const row = data[0];
        localStorage.setItem("pelanggan_session_token", row.session_token);
        localStorage.setItem("pelanggan_username", row.username);
        window.location.href = "dashboard.html";
    }

    loginBtn.addEventListener("click", doLogin);
    passwordInput.addEventListener("keydown", (e) => { if (e.key === "Enter") doLogin(); });
    usernameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") doLogin(); });
});
