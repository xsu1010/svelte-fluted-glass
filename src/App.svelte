<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
  import FlutedGlass from "./lib/FlutedGlass.svelte";

  const sentences = ["aka su", "aka gus", "efficiency is clever laziness"];

  const randomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];
    const randomSentenceElement = document.getElementById("random-sentence");
    if (randomSentenceElement) {
      randomSentenceElement.innerText = randomSentence;
    }
  };

  let i = 0;
  let lastTimeout: number = 0;
  function printQuote() {
    const quote = `here's to the crazy ones. the misfits. the rebels. the troublemakers. the
    round pegs in the square holes. the ones who see things differently. they're
    not fond of rules. and they have no respect for the status quo. you can
    praise them, disagree with them, quote them, disbelieve them, glorify or
    vilify them. about the only thing you can't do is ignore them. because they
    change things. they invent. they imagine. they heal. they explore. they
    create. they inspire. they push the human race forward. and while some may
    see them as the crazy ones, we see genius. because the ones who are crazy
    enough to think that they can change the world, are the ones who do.`;
    let speed = 50;
    const quoteElement = document.getElementById("quote");
    if (i < quote.length && quoteElement) {
      quoteElement.innerHTML += quote.charAt(i);
      if ([".", ","].includes(quote.charAt(i)))
        speed = Math.floor(Math.random() * 1000) + 100;
      i++;
      lastTimeout = setTimeout(printQuote, speed);
    } else {
      const quoteElement = document.getElementById("quote")!;
      quoteElement.classList.add("after:animate-blink");
    }
  }
  // run the function as soon as the component is mounted
  onMount(() => {
    printQuote();
  });

  // clean up the function when the component is destroyed
  onDestroy(() => {
    clearTimeout(lastTimeout);
  });
</script>

<main class="font-mono">
  <p class="absolute bottom-0 left-0 text-[2rem] sm:text-[3rem] md:text-[4rem]">
    <span
      class="text-wrap break-keep w-full font-extrabold overflow-hidden after:content-['|']"
      id="quote"
    ></span>
  </p>

  <div class="flex flex-col">
    <button
      class="p-3 w-[20rem] h-[10rem] md:w-[30rem] md:h-[10rem] select-none"
      on:click={randomSentence}
      aria-label="Click to change the sentence"
    >
      <FlutedGlass>
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-3xl md:text-4xl">Augusto Gouveia</h1>
          <p>
            <span id="random-sentence">aka su</span>
            <!-- <span class="animate-blink">|</span> -->
          </p>
        </div>
      </FlutedGlass>
    </button>
    <div class="flex justify-evenly mt-5">
      <a
        href="https://linkedin.com/in/augusto-gouveia"
        aria-label="Go to my LinkedIn"
        target="_blank"
      >
        <div class="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem]">
          <FlutedGlass radius={12}>
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </FlutedGlass>
        </div>
      </a>
      <a
        href="https://github.com/xsu1010"
        aria-label="Go to my LinkedIn"
        target="_blank"
      >
        <div class="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem]">
          <FlutedGlass radius={12}>
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </FlutedGlass>
        </div>
      </a>
    </div>
  </div>
</main>
