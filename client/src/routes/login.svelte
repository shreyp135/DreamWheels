<script>
    import { goto } from "$app/navigation";
    let email = "";
    let password = "";
  
    const handleSubmit = async () => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await res.json();
      if (res.ok) {
        // Store token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        goto("/user");
      } else {
        alert(data.message);
      }
    };
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <div>
      <input type="email" placeholder="Email" bind:value={email} class="border p-2 m-2" />
      <input type="password" placeholder="Password" bind:value={password} class="border p-2 m-2" />
      <button class="bg-blue-500 text-white px-4 py-2 m-2" on:click={handleSubmit}>Login</button>
    </div>
  </div>
  