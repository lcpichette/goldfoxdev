<script>
  /*
  import Chart from 'chart.js/auto';
  import { onMount } from 'svelte';
  */

  let totalSaved = 0.0;
  let sitesEstablished = 0;

  const date = new Date();
  // d/mo/yr
  let tmp = date.toLocaleDateString();
  let tmpSplit = tmp.split('/');
  let todayFmtd = [];
  todayFmtd.push(tmpSplit[0]);
  todayFmtd.push(tmpSplit[2].slice(2,4));
  const today = todayFmtd[0] + "/" + todayFmtd[1];

  const YR = 1;
  const MO = 0;

  // "mo/yr" format
  function monthDiff(startDate, endDate){
    let sD = startDate.split('/');
    let eD = endDate.split('/');

    let start = [];
    start.push(parseFloat(sD[0]));
    start.push(parseFloat(sD[1]));
    let end = [];
    end.push(parseFloat(eD[0]));
    end.push(parseFloat(eD[1]));
    
    let diff = ((end[1] - start[1]) * 12) + (end[0] - start[0]);
    return diff;
  }

  const startDate = "6/21"; // mo/yr
  let dateDiff = monthDiff(startDate, today);

  let labels = [];

  let yI = 0;
  for(let mI = 0; mI <= dateDiff; mI++) {
    if(mI === 12){
      dateDiff -= 12;
      mI -= 12;
      yI += 1;
    }

    let sdSplit = startDate.split('/');
    let intSDSplit = [];
    intSDSplit.push(parseInt(sdSplit[MO]));
    intSDSplit.push(parseInt(sdSplit[YR]));

    labels.push(String(intSDSplit[MO] + mI) + '/' + String(intSDSplit[YR] + yI));
  }
  // LABELS ARE NOW PREPARED

  // Prepare data

  //
  // v TODO v

  // WORDPRESS: hosting + domain
  const WORDPRESS_BUSINESS = 26.5; // 25/mo + 1.5/mo
  const WORDPRESS_PERSONAL = 5.5; // 4/mo + 1.5/mo
  let amtSaved = 0.0; 
  let sites = [
    {
      name: "Fox Counseling Services",
      data: [],
      deployed: "6/21",
      prevRate: 19.0,
      newRate: 5.1,
      color: "rgb(115,0,230)"
    },
    {
      name: "LoloMcD Art",
      data: [],
      deployed: "9/21",
      prevRate: WORDPRESS_PERSONAL,
      newRate: 1.2,
      color: "rgb(230,179,255)"
    },
    {
      name: "Beaverrac",
      data: [],
      deployed: "9/21",
      prevRate: WORDPRESS_PERSONAL,
      newRate: 1.1,
      color: "rgb(255, 128, 0)"
    },
    {
      name: "Anonymous 1",
      data: [],
      deployed: "8/21",
      prevRate: WORDPRESS_BUSINESS,
      newRate: 5.1,
      color: "rgb(100, 100, 100)"
    }
  ];
  sitesEstablished = sites.length;
  for(let i = 0; i <= dateDiff; i++){
    let diff;

    for(const site of sites){
      diff = dateDiff - monthDiff(site.deployed, today);
      if(i >= diff){
        amtSaved = (i - diff) * (site.prevRate - site.newRate);
      } else{
        amtSaved = 0;
      }
      site.data.push(amtSaved);
      totalSaved += amtSaved;
    }
  }
  // ^ TODO ^
  //


  let data = {
    labels,
    datasets: []
  };
  for(const site of sites){
    data.datasets.push({
      label: site.name,
      backgroundColor: site.color,
      borderColor: site.color,
      data: site.data
    });
  }

  /*
  const config = {
    type: 'line',
    data,
    options: {
      scales: {
        y: {
          title: 'Savings',
          ticks: {
            callback: function(value, index, values) {
              return '$' + value;
            }
          }
        }
      }
    }
  };

  let chart
  onMount(() => {
    const myChart = new Chart(
      chart, config
    )
  })
  */
</script>


<svetle:head>
  <title>GFD About</title>
</svetle:head>


<div id="about" class="py-16 overflow-hidden rounded-md shadow-md shadow-gray-300/50 border-t border-gray-300/50 relative z-20">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <h2 class="text-base text-primary-700 font-semibold tracking-wide uppercase underline-fancy-static-small">We get it</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary-800 sm:text-4xl">What makes us different</p>
      </div>
      <div class="relative z-1 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">Humble uprisings and empathy; Gold Fox Dev started as a college student's love for making websites, and has transformed into something special.</p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-1">
            <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
            <p>We're all handling life the best we can. We're here to help make it a little less chaotic.</p>
            <ul role="list">
                <li>We let you focus on what's important; We aim to get all of the necessary information we need during our consultation meeting, preventing interruptions in development and in your workflow.</li>
                <li>At a low price, we won't break the bank!</li>
                <li>We don't construct websites using templates; Your website will always be unique.</li>
            </ul>
            
            <h3 class="text-primary-800">We’re here to help</h3>
            <p>From idea to launch, we work quickly, provide high-quality results, all at an affordable rate.</p>
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
            <div class="rounded-t-lg px-6 py-24">
                <!-- Title -->
                <div class="flex justify-start items-center flex-col lg:flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <h3 class="block lg:inline pl-4 pb-1 text-xl leading-8 font-semibold tracking-tight text-primary-800">Meet the Developer</h3>
                    <h4 class="block lg:inline italic text-gray-600">... and the cat?</h4>
                </div>

                <!-- Quote -->
                <div class="relative text-lg text-gray-700 font-medium mt-8">
                    <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p class="relative">Cat-dad and technology enthusiast, I spend my free time watching shows and fearing spontaneous attacks from my cat Keanu. My partner Lauren and I also enjoy long binge-watching sessions on the couch.</p>
                </div>

                <!-- Keanu -->
                <div class="rounded-full right-10 mt-6 absolute flex">
                    <span class="place-self-center pr-4 text-primary-800 font-semibold">Keanu</span>
                    <img class="w-12 h-12 border border-transparent rounded-full bg-secondary" src="/img/keanu_headshot.jpg" alt="">
                </div>
            </div>
            <cite class="relative flex items-center sm:items-start bg-secondary rounded-b-lg not-italic py-5 px-6">
              <div class="relative rounded-full border-2 border-white">
                <img class="w-12 h-12 rounded-full bg-secondary" src="/img/headshot.jpg" alt="">
              </div>
              <span class="relative flex flex-col text-left ml-6 text-secondary font-semibold">
                <p class="text-gray-800 font-semibold text-base inline">Lucas Pichette</p>
                <p class="hidden lg:block text-gray-700 font-normal">Developer at Gold Fox Dev</p>
                <p class="block lg:hidden text-gray-600 font-normal">Developer</p>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
    
    <div class="max-w-7xl px-8 mx-auto pt-6 flex justify-between">
      <!-- Stats section -->
      <div class="mt-10 flex w-full">
        <!--
        <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
        -->
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8">

          <!--
          <div class="border-t-2 border-gray-100 pt-6">
          <dt class="text-base font-medium text-gray-500">Founded</dt>
          <dd class="text-3xl font-extrabold tracking-tight text-primary-800">2021</dd>
          </div>

          <div class="border-t-2 border-gray-100 pt-6">
          <dt class="text-base font-medium text-gray-500">Employees</dt>
          <dd class="text-3xl font-extrabold tracking-tight text-primary-800">5</dd>
          </div>

          <div class="border-t-2 border-gray-100 pt-6">
          <dt class="text-base font-medium text-gray-500">Sites Established</dt>
          <dd class="text-3xl font-extrabold tracking-tight text-primary-800">{sitesEstablished}</dd>
          </div>
          -->

          <div>
            <dt class="text-base font-medium text-gray-600">Hosting-Related Savings To-Date</dt>
            <dd class="text-3xl font-extrabold tracking-tight text-primary-800" id="totalSaved">${totalSaved.toFixed(0)}</dd>
            <dt class="text-base font-medium text-gray-500 italic">Avg Savings: ${(totalSaved / sitesEstablished / dateDiff).toFixed(2)}/mo</dt>
          </div>
        </dl>
      </div>

      <!-- Chart -->
      <!--TODO:
      <div class="w-full relative">
        <canvas bind:this={chart}>
          <h1>Something went wrong</h1>
        </canvas>
      </div>
      -->
    </div>
  </div>
  