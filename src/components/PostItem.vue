<template>
  <div class="blog">
    <p class="blog-title">Welcome to the new blog</p>
    <p class="blog-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque
      incidunt impedit sit repudiandae necessitatibus laudantium laboriosam sunt
      amet quis corporis veniam dolore sint iste facilis porro similique quas
      tenetur minima nisi neque, quasi nesciunt quibusdam tempore. Unde,
      assumenda ducimus beatae voluptates fugit quos aspernatur quis iste optio
      nam facere fugiat animi! Nemo odit soluta odio eveniet ullam nobis dolore
      unde quisquam laudantium repellat dicta, quasi voluptates adipisci eaque
      officia libero sit eligendi exercitationem enim ad minima cumque nulla.
      Quam rerum sunt asperiores eum esse. Eligendi exercitationem id
      voluptatum, eum natus sequi est in corrupti ipsam at quasi tempore
      architecto.
    </p>
    <div class="blog-tags">
      <span>#coding</span>
      <span>#web</span>
      <span>#vue</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.blog {
  @apply flex flex-col items-start text-left max-w-[800px];

  &-title {
    @apply text-2xl font-bold bg-teal-600 px-3 py-1 text-white;
  }

  &-body {
    @apply my-4;
  }

  &-tags {
    @apply flex flex-row flex-wrap justify-center items-center;

    span {
      @apply mx-2 first:ml-0 cursor-pointer text-gray-400 hover:text-gray-500 font-bold;
    }
  }
}
</style>
