<template>
  <div class="min-h-screen min-w-screen bg-purple-900 text-white flex flex-col">
    <div class="max-w-3xl mx-auto p-4 flex-1 flex flex-col">
      <header class="mb-12 sm:mb-0">
        <div class="p-2 flex flex-row justify-between items-center">
          <h1 class="m-0 text-2xl">tbw</h1>
          <div>
            <a href="https://tbw.bearblog.dev/blog/" class="text-xl font-bold text-white" target="_blank">blog</a>
          </div>
        </div>
      </header>
      <div class="flex-1 flex flex-col justify-center">
        <main>
          <div class="p-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div class="sm:basis-3/5 mb-12 sm:mb-0">
              <h2 class="m-0 text-4xl">robotics enthusiast & uni student</h2>
              <p class="text-lg">
                hello there! i am a robotics engineering undergraduate student, with background in web
                development and several robotics competitions. feel free to contact me about anything!
              </p>
              <div>
                <a href="/files/talha-karasu-cv-en.pdf" class="text-white mr-4" target="_blank">cv</a>
                <a href="https://www.linkedin.com/in/talhakarasu/" class="text-white mr-4" target="_blank">linkedin</a>
                <a href="mailto:talha@karasu.me" class="text-white" target="_blank">mail</a>
              </div>
            </div>
            <div class="sm:basis-2/5 flex justify-center sm:justify-end content-center">
              <NuxtImg src="/images/tbw.jpg" alt="picture of talha" class="w-3/4 rounded-3xl" quality="80" format="webp"
                placeholder />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Poppins, sans-serif;
}
</style>
