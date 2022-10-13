# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.245.2/containers/debian/.devcontainer/base.Dockerfile

# [Choice] Debian version (use bullseye on local arm64/Apple Silicon): bullseye, buster
ARG VARIANT="buster"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

# ** [Optional] Uncomment this section to install additional packages. **
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

RUN su vscode -c "curl -fsSL https://deno.land/install.sh | sh"
ENV DENO_INSTALL="/home/vscode/.deno"
# RUN su vscode -c "echo 'export DENO_INSTALL="/home/vscode/.deno"' >> $HOME/.bashrc"
# RUN su vscode -c "echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> $HOME/.bashrc"
