<script>
    import { goto } from "$app/navigation";
  
    const handleLogin = () => {
      goto("/login");
    };
  
    const handleRegister = () => {
      goto("/register");
    };
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold mb-4">Welcome to Car Dealership</h1>
    <div>
      <button class="bg-blue-500 text-white px-4 py-2 m-2" on:click={handleLogin}>Login</button>
      <button class="bg-green-500 text-white px-4 py-2 m-2" on:click={handleRegister}>Register</button>
    </div>
  </div>
  