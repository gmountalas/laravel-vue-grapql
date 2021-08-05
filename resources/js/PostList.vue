<template>
    <div>
        PostList
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    apollo: {
        // Tagged template
        posts: gql`
            {
                posts {
                    id
                    title
                }
            }
        `
    }
};
</script>
