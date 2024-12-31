<script>
    let user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
  
    if (!user || !token) {
      window.location.href = "/login";
    }
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Welcome, {user.email}</h1>
    <div>
      <a href="/user/vehicles" class="bg-blue-500 text-white px-4 py-2 m-2">View My Vehicles</a>
    </div>
  </div>
  