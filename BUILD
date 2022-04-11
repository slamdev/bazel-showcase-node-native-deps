load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")

nodejs_binary(
    name = "binary",
    data = ["@npm//sharp"],
    entry_point = ":index.js",
)

nodejs_image(
    name = "img",
    binary = ":binary",
    include_node_repo_args = False,
    node_repository_name = "nodejs_linux_amd64",
)
