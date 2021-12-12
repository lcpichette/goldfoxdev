
<svelte:head>
  
</svelte:head>

<script>
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };


  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
</script>


<div id="about" class="py-16 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">We get it</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What makes us different</p>
      </div>
      <div class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">Humble uprisings and empathy; Gold Fox Dev started as a college student's love for making websites, and has transformed into something special.</p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
            <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
            <p>We're all handling life the best we can. We're here to help make it a little less chaotic.</p>
            <ul role="list">
                <li>We let you focus on what's important; We aim to get all of the necessary information we need during our consultation meeting, preventing interruptions in development and in your workflow.</li>
                <li>At a low price, we won't break the bank!</li>
                <li>We don't construct websites using templates; Your website will always be unique.</li>
            </ul>
            
            <h3>We’re here to help</h3>
            <p>From idea to launch, we work quickly, provide high-quality results, all at an affordable rate.</p>
            </div>

            <!-- Stats section -->
            <div class="mt-10 flex w-full">
              <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                  <div class="border-t-2 border-gray-100 pt-6">
                  <dt class="text-base font-medium text-gray-500">Founded</dt>
                  <dd class="text-3xl font-extrabold tracking-tight text-gray-900">2021</dd>
                  </div>

                  <!--
                  <div class="border-t-2 border-gray-100 pt-6">
                  <dt class="text-base font-medium text-gray-500">Employees</dt>
                  <dd class="text-3xl font-extrabold tracking-tight text-gray-900">5</dd>
                  </div>
                  -->

                  <div class="border-t-2 border-gray-100 pt-6">
                  <dt class="text-base font-medium text-gray-500">Sites Established</dt>
                  <dd class="text-3xl font-extrabold tracking-tight text-gray-900">6</dd>
                  </div>

                  <div class="border-t-2 border-gray-100 pt-6">
                  <dt class="text-base font-medium text-gray-500">Hosting Expenses Saved To-Date</dt>
                  <dd class="text-3xl font-extrabold tracking-tight text-gray-900">$1.1k</dd>
                  </div>
              </dl>
          </div>

          <div class="mt-16 flex text-base max-w-prose mx-auto lg:max-w-none">
            <div class="rounded-md shadow">
              <a href="#contact" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Contact us
              </a>
            </div>
            <div class="rounded-md shadow ml-4">
              <a href="/" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <!-- Title -->
                <div class="flex justify-start items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <h3 class="inline pl-4 pb-1 text-xl leading-8 font-semibold tracking-tight text-gray-900">Meet the Developer</h3>
                    <h4 class="inline italic text-gray-600">... and the cat?</h4>
                </div>

                <!-- Quote -->
                <div class="relative text-lg text-gray-700 font-medium mt-8">
                    <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="relative">Cat-dad and technology enthusiast, I spend my free time watching shows and fearing spontaneous attacks from my cat Keanu. My partner Lauren and I also enjoy long binge-watching sessions on the couch.</p>
                </div>

                <!-- Keanu -->
                <div class="rounded-full right-10 absolute flex">
                    <span class="place-self-center pr-4 text-gray-900 font-semibold">Keanu</span>
                    <img class="w-12 h-12 rounded-full bg-indigo-300" src="/img/keanu_headshot.jpg" alt="">
                </div>
            </div>
            <cite class="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <div class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                <img class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300" src="/img/headshot.jpg" alt="">
              </div>
              <span class="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                <p class="text-white font-semibold inline">Lucas Pichette</p>
                <p class="inline">Developer at Gold Fox Dev</p>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
    
    <div>
      <canvas id="myChart"></canvas>
    </div>
  </div>
  