<script>
    let dealership = JSON.parse(localStorage.getItem("dealership"));
    const token = localStorage.getItem("token");
    let cars = [];
  
    if (!dealership || !token) {
      window.location.href = "/login";
    }
  
    const fetchCars = async () => {
      const res = await fetch(`/api/dealership/cars`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
  
      cars = await res.json();
    };
  
    fetchCars();
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Inventory</h1>
    <ul>
      {#each cars as car}
        <li class="border p-4 m-2">{car.name} - {car.model}</li>
      {/each}
    </ul>
  </div>
  