<script>
    let user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    let vehicles = [];
  
    if (!user || !token) {
      window.location.href = "/login";
    }
  
    const fetchVehicles = async () => {
      const res = await fetch("/api/user/vehicles", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
  
      vehicles = await res.json();
    };
  
    fetchVehicles();
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold mb-4">My Vehicles</h1>
    <ul>
      {#each vehicles as vehicle}
        <li class="border p-4 m-2">{vehicle.car_id}</li>
      {/each}
    </ul>
  </div>
  