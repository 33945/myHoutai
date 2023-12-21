<script setup>
import { reactive, computed, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
const formState = reactive({
  username: "",
  password: "",
  userTip: "",
  pwdTip: "",
  remember: true,
});
const formRef = ref();
//表单登陆区域
const area_contain = ref(null);
//try22222

const checkUser = async (_rule, value) => {
  if (value === "") {
    return Promise.reject("Please input the password");
  } else {
    if (formState.username !== "") {
      formRef.value.validateFields("checkPass");
    }
    return Promise.resolve();
  }
  // const reg = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,20}$/;
};
const rules = {
  username: [
    {
      required: true,
      validator: checkUser,
      trigger: "change",
    },
  ],
};
// const pwdReg = (e) => {
//   const reg = /^[a-zA-Z0-9_]{6,16}$/;
//   if (reg.test(e.target.value)) {
//     passwordFlag.value = true;
//   } else {
//     passwordFlag.value = false;
//     if (e.target.value === "") {
//       formState.pwdTip = "密码不能为空";
//     } else if (e.target.value.length < 2 || e.target.value.length > 16) {
//       formState.pwdTip = "密码长度为2-16位";
//     }
//   }
// };
const onFinish = (values) => {
  // console.log(formState.username, formState.password);
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
const add = () => {
  // area_contain.value.style.display = "none";
};
</script>

<template>
  <div class="containers">
    <div class="content">
      <div class="logo" style="font-size: 20px">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          style="font-size: 30px; height: 30px"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4.737a4.263 4.263 0 100-8.526 4.263 4.263 0 000 8.526z"
            fill="#165DFF"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.263 7.737H21v4.353l-.013.384h-4.75c.024-.237.026-.41.026-.41V7.737zM11.526 3.013c.207-.01.402-.013.402-.013h4.335v4.737h-4.35s-.202.004-.387.025v-4.75z"
            fill="#165DFF"
          ></path>
          <path fill="#16D2AC" d="M15 3h6v6h-6z"></path>
        </svg>
        <span>Arco</span>
      </div>
      <div class="content-inner">
        <div ref="area_contain" style="display: block">
          <form class="login-form">
            <div class="login-form-title">登录 Arco</div>
            <div class="login-form-sub-title">内部项目管理系统</div>
            <a-form
              :model="formState"
              name="normal_login"
              class="login-form"
              :rules="rules"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
            >
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your username!' },
                ]"
                class="relative"
              >
                <a-input
                  placeholder="请输入用户名"
                  v-model:value="formState.username"
                  @blur="userReg"
                >
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
                <!-- <transition name="tip">
                  <div class="text-[red] absolute left-4" v-show="!userFlag">
                    {{ formState.userTip }}
                  </div>
                </transition> -->
              </a-form-item>

              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your password!' },
                ]"
                class="relative"
              >
                <a-input-password
                  placeholder="请输入密码"
                  v-model:value="formState.password"
                  @blur="pwdReg"
                >
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
                <!-- <transition name="tip">
                  <div
                    class="text-[red] absolute left-4"
                    v-show="!passwordFlag"
                  >
                    {{ formState.pwdTip }}
                  </div>
                </transition> -->
              </a-form-item>
              <a-form-item>
                <a-form-item name="remember" no-style>
                  <a-checkbox v-model:checked="formState.remember"
                    >记住我</a-checkbox
                  >
                </a-form-item>
                <a class="login-form-forgot" href="">忘记密码</a>
              </a-form-item>

              <a-form-item>
                <a-button
                  :disabled="disabled"
                  type="primary"
                  html-type="submit"
                  class="login-form-button arco-active"
                  >登录</a-button
                >
              </a-form-item>
              <a-form-item>
                <a-button block @click="add">注册</a-button>
              </a-form-item>
            </a-form>
          </form>
        </div>
        <div ref="area_conTwo" style="display: none" class="area_conTwo">
          <form class="login-form">
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                placeholder="请输入用户名"
                v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                placeholder="请输入用户名"
                v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <div class="flex">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your username!' },
                ]"
              >
                <a-input
                  class="area_han"
                  placeholder="验证码"
                  v-model:value="formState.username"
                ></a-input>
              </a-form-item>
              <a-button type="primary">Primary Button</a-button>
            </div>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="请输入密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="确认密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <div class="flex end_flex">
              <a-button type="primary">注册</a-button>
              <a-button type="primary">去登陆</a-button>
            </div>
          </form>
        </div>
        <div ref="area_conTwo" style="display: none" class="area_conTwo">
          <form class="login-form">
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                placeholder="请输入邮箱"
                v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>
            <div class="flex">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your username!' },
                ]"
              >
                <a-input
                  class="area_han"
                  placeholder="验证码"
                  v-model:value="formState.username"
                ></a-input>
              </a-form-item>
              <a-button type="primary">获取验证码</a-button>
            </div>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="请输入新密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password
                placeholder="确认密码"
                v-model:value="formState.password"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <div class="flex end_flex">
              <a-button type="primary">重置密码</a-button>
              <a-button type="primary">去登陆</a-button>
            </div>
          </form>
        </div>
      </div>
      <div class="content-footer"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.containers {
  display: flex;
  height: 100vh;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
}

.containers .content {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}
.containers .logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
}

.login-form {
  position: relative;
  max-width: 320px;
  overflow: hidden;
  height: 390px;
}
.login-form-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #1d2129;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.login-form-sub-title {
  font-size: 16px;
  line-height: 24px;
  color: #86909c;
}

.ant-input-affix-wrapper {
  margin-top: 10px !important;
}
.login-form-forgot {
  margin-left: 190px;
}
.ant-form-item-control-input-content {
  padding: 10px;
}

.arco-active {
  width: 100% !important;
}

.ant-input-affix-wrapper {
  padding: 9px 11px !important;
}

.ant-form-item-control-input-content > button {
  height: 40px !important;
}

.ant-form-item {
  margin-bottom: 12px;
}

.ant-form {
  padding-top: 20px !important;
}

.area_conTwo {
  min-width: 320px;
}

.area_han {
  width: 170px;
}

.flex {
  display: flex !important;
  height: 41.6px;
  justify-content: space-between;
}
.flex > * {
  height: 41.6px !important;
}
.flex .ant-input {
  padding: 9px 11px;
}
.end_flex > * {
  width: 150px;
}
/*过渡动画*/
.tip-enter-from,
.tip-leave-to {
  opacity: 0;
}
.tip-enter-to,
.tip-leave {
  opacity: 1;
}
.tip-enter-active,
.tip-leave-active {
  transition: all 1s;
}
</style>
