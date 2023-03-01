import { defineComponent, ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';


/**
 * 顶部导航栏组件
 * 会更具router的变化而进行渲染
 */
export const BlogHeader = defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter();

    const onBtnClick = (path: string) => {
      router.hasRoute(path) && router.push({
        name: path
      });
    };

    return () => (
      <>
        <t-head-menu expandType='popup'>
          <t-menu-item value='2-1'>
            <t-button theme="default" variant="text" onClick={onBtnClick.bind(this, 'goChange')}>Go结构体转换</t-button>
          </t-menu-item>
        </t-head-menu>
      </>
    )
  }
})



