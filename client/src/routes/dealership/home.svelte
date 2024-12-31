<script>
    let dealership = JSON.parse(localStorage.getItem("dealership"));
    const token = localStorage.getItem("token");
  
    if (!dealership || !token) {
      window.location.href = "/login";
    }
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Welcome, {dealership.name}</h1>
    <div>
      <a href="/dealership/inventory" class="bg-blue-500 text-white px-4 py-2 m-2">View Inventory</a>
    </div>
  </div>
  