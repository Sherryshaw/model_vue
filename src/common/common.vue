<script>
import { message } from "ant-design-vue";
import config from "../../package.json";
import { createApp } from "vue";
const app = createApp();
const projectName = config.name;
const version = config.version;
const author = config.author;
export default {
  projectName,
  version,
  author,
  message,
};
</script>