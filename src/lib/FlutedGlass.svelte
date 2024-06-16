<script setup lang="ts">
  type FlutedGlassType = "fluted" | "cross" | "romb" | "circle";

  export let type: FlutedGlassType = "fluted";
  export let angle: number | undefined = undefined;
  export let radius: number = 16;

  function createGroove(angle: number) {
    if (type === "circle") {
      return `repeating-radial-gradient(circle at 50%,
      black 0px,
      black 1px,
      transparent 3px,
      transparent 6px)`;
    }
    return `repeating-linear-gradient(${angle}deg,
      black 0px,
      black 1px,
      transparent 3px,
      transparent 6px)`;
  }

  const groovesStyle = () => {
    const groovesAngle = angle ?? (type === "romb" ? 45 : 90);

    const grooves = [createGroove(groovesAngle)];

    if (type !== "fluted") {
      grooves.push(createGroove(groovesAngle + 90));
    }

    return grooves.join(", ");
  };

  const radiusStyle = `${radius}px`;

  function createDiffusion(angle: number) {
    if (type === "circle") {
      return `repeating-radial-gradient(circle at 50%,
      transparent 0px,
      transparent 3px,
      black 4px,
      black 5px,
      transparent 6px)`;
    }
    return `repeating-linear-gradient(${angle}deg,
      transparent 0px,
      transparent 3px,
      black 4px,
      black 5px,
      transparent 6px)`;
  }

  const diffusionStyle = () => {
    const newAngle = angle ?? (type === "romb" ? 45 : 90);

    return createDiffusion(newAngle);
  };
</script>

<div
  class="relative w-full h-full cursor-pointer transition-all duration-75 ease-in active:scale-[0.98]"
  style:border-radius={radiusStyle}
>
  <div
    class="h-full w-full backdrop-blur-md overflow-hidden bg-stone-200/10 shadow-xl"
    style:border-radius={radiusStyle}
  ></div>

  <div
    class="absolute h-full w-full top-0 left-0 right-0 bottom-0 overflow-hidden bg-zinc-400/10 backdrop-blur-xl"
    style:border-radius={radiusStyle}
    style:mask-image={groovesStyle()}
  ></div>

  <div
    class="absolute h-full w-full top-0 left-0 right-0 bottom-0 overflow-hidden bg-indigo-300/10"
    style:border-radius={radiusStyle}
    style:mask-image={diffusionStyle()}
  ></div>

  <div
    class="absolute h-full w-full top-0 left-0 right-0 bottom-0 overflow-hidden border-[1px] border-stone-300/20 z-20 flex justify-center items-center"
    style:border-radius={radiusStyle}
  >
    <slot />
  </div>
</div>
