const currentPath = window.location.pathname
  .replace(/\/$/, "")
  .split("/")
  .pop()
  .replace(".html", "")
  .replace("index", "")
  .trim();

if (currentPath === "COMS319-Midterm") {
  window.location.href = "./index.html";
}

(async () => {
  const dataRequest = await fetch("./data.json");
  const data = await dataRequest.json();

  if (currentPath === "") {
    const servicesEl = document.getElementById("services");

    for (const { id, name, image, description, url } of data) {
      servicesEl.insertAdjacentHTML(
        "beforeend",
        `
        <div id="${id}" class="flex flex-col items-start">
            <div class="relative w-full">
              <img
                src="${image}"
                alt="${name}"
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </div>
            <div class="max-w-xl">
              <div class="group relative">
                <h3
                  class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                >
                    ${name}
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  ${description}
                </p>
              </div>
            </div>
            <a
                href="./service.html?id=${id}"
                class="mt-4 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >Learn more</a
              >
          </div>`
      );
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (id) {
    const serviceEl = document.getElementById("service");

    const { name, image, description, url } = data.find(
      (service) => service.id === id
    );

    serviceEl.insertAdjacentHTML(
      "beforeend",
      `
    <div class="relative bg-white">
  <img class="min-h-screen h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2" src="${image}" alt="${name}">
  <div class="mx-auto grid max-w-7xl lg:grid-cols-2">
    <div class="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
      <div class="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">${name}</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">${description}</p>   
      </div>
      <div class="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg mt-4">
      <a
        href="${url}"
        target="_blank"
        class="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Visit website
      </a>
      </div>
    </div>
  </div>
</div>
`
    );
  }
})();
