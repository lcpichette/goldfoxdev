<script>
    export let title;
    export let description;
    export let type;

    export let author = "Lucas Pichette";
    export let publishDate;

    export let readTime;

    export let imgUrl;
    export let authorImgUrl;
    export let postUrl;
</script>

<div class="post-card flex flex-col rounded-md shadow-lg overflow-hidden hover:shadow-2xl hover:transform hover:-translate-y-[1px] cursor-pointer">
    <div class="flex-shrink-0 border-b-2 border-gray-300">
        <img class="h-48 w-full object-cover" src="{imgUrl}" alt="">
    </div>
    <div class="flex-1 bg-gradient-to-tl from-primary-800/10 via-white to-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <p class="flex flex-wrap text-sm tracking-wide font-semibold text-primary-700">
                {#each type as tag}
                <a href="{postUrl}" class="underline-fancy mx-1.5">
                    {tag}
                </a>
                {/each}
            </p>
            <a href="{postUrl}" class="block mt-2">
                <p class="text-xl font-semibold text-primary-800">
                {title}
                </p>
                <p class="mt-3 text-base text-gray-600">
                {description}
                </p>
            </a>
            </div>
            <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                    <span class="sr-only">{author}</span>
                    <img class="h-10 w-10 rounded-full" src="{authorImgUrl}" alt="">
                </div>
                <div class="ml-3">
                    <p class="text-sm font-medium text-primary-800">
                        {author}
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="{publishDate}">
                        {publishDate}
                    </time>
                    <span aria-hidden="true">
                        &middot;
                    </span>
                    <span>
                        {readTime + "min read"}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>