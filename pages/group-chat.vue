<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const { supabase } = useSupabase();
const { user } = useAuth();

const messageInput = ref();
const messageResponse = ref();

const sendMessage = async () => {
  if (!messageInput.value) return;
  await supabase.from("chat").insert({
    message: messageInput.value,
    user_id: user.value.id,
  });
  messageInput.value = "";
};

const {data: {users}} = await supabase.auth.admin.listUsers()

if (process.client) {
  messageResponse.value = await supabase.from("chat").select("message,user_id");
}

</script>

<template>
  <NuxtLayout name="custom-layout">
    <div
      class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden h-screen rounded-r-lg"
    >
      <div
        class="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4 bg-indigo-900 h-full text-white"
      >
        <div class="sticky top-0 p-4 w-full">
          <ul
            class="flex sm:flex-col overflow-hidden content-center justify-between"
          >
            <h1>Members</h1>
            <li v-for="user in users">{{(user.user_metadata.first_name)}}</li>
          </ul>
        </div>
      </div>
      <main role="main" class="w-full h-full flex-grow p-3 overflow-auto">
        <div class="flex mb-4">
          <div>
            <div v-for="message in messageResponse.data" display="flex flex-col mb-4">
              <div
                class=" m-2 mr-2 py-3 px-4 bg-indigo-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                :class="message.user_id == user.user_id ? 'justify-end':'' "
              >
                {{ message.message }}
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent class="relative mt-1 w-full">
          <input
            type="text"
            id="message"
            class="w-4/5 rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Message"
            v-model="messageInput"
          />
          <button
            @click="sendMessage"
            type="button"
            class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
          >
            <span class="font-bold">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 ml-2 transform rotate-90"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              ></path>
            </svg>
          </button>
        </form>
      </main>
    </div>
  </NuxtLayout>
</template>
