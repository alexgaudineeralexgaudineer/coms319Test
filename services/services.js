(async () => {
  const dataRequest = await fetch("/services/data.json");
  const data = await dataRequest.json();

  const services = document.getElementById("services");

  for (const { id, name, image, description, url } of data) {
    services.insertAdjacentHTML(
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
            <a class="mt-4 bg-red-600 rounded px-4 py-2 text-white hover:bg-red-700" href="${url}" target="_blank">Learn more</a>
          </div>`
    );
  }
})();
