<script lang="ts">
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
</script>

<main class="font-mono">
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
            <span id="random-sentence">aka su</span><span class="animate-blink"
              >|</span
            >
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
