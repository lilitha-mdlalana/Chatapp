<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const { user } = useAuth();
</script>

<template>
  <NuxtLayout name="custom-layout">
    <main class="flex justify-center align-center">
      <div class="w-2/4 mx-auto border mt-4 rounded-md">
        <div class="flex justify-between">
          <div class="p-6">
            <h1 class="text-2xl">Profile</h1>
            <p>Some info may be available to other people</p>
          </div>
        </div>
        <hr />
        <div id="user-info">
          <div class="flex m-5">
            <p class="text-sm text-gray-500">Photo:</p>
            <img
              class="w-10 h-10 ml-52 border rounded-full m-2"
              src="~/assets/images/user.png"
              alt="User avatar"
            />
          </div>
          <hr />
          <div class="flex m-5">
            <p class="text-sm text-gray-500">NAME:</p>
            <p class="text-sm ml-52">{{ user.user_metadata.first_name }}</p>
          </div>
          <hr />
          <div class="flex m-4">
            <p class="text-sm text-gray-500">BIO:</p>
            <p class="text-sm ml-52">{{ user.user_metadata.bio }}</p>
          </div>
          <hr />
          <div class="flex m-5">
            <p class="text-sm text-gray-500">Phone:</p>
            <p class="text-sm ml-52">{{ user.phone }}</p>
          </div>
          <hr />
          <div class="flex m-5">
            <p class="text-sm text-gray-500">EMAIL:</p>
            <p class="text-sm ml-52">{{ user.email }}</p>
          </div>
          <hr />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
