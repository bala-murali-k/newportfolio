#!/bin/bash

# Create new content directory structure
mkdir -p content/common/sidebar
mkdir -p content/about/minimal content/about/modern
mkdir -p content/contact/minimal content/contact/modern
mkdir -p content/home/minimal content/home/modern
mkdir -p content/projects/minimal content/projects/modern

# Move and rename content files
# HOME
cp content/home/home.content.ts content/home/home.content.ts.bak
cp content/home/minimal/home.minimal.content.ts content/home/minimal/home.content.ts
cp content/home/modern/home.modern.content.ts content/home/modern/home.content.ts

# ABOUT
cp content/about/about.content.ts content/about/about.content.ts.bak
cp content/about/minimal/about.minimal.content.ts content/about/minimal/about.content.ts
cp content/about/modern/about.modern.content.ts content/about/modern/about.content.ts

# CONTACT
cp content/contact/contact.content.ts content/contact/contact.content.ts.bak
cp content/contact/minimal/contact.minimal.content.ts content/contact/minimal/contact.content.ts
cp content/contact/modern/contact.modern.content.ts content/contact/modern/contact.content.ts

# PROJECTS
cp content/projects/projects.content.ts content/projects/projects.content.ts.bak
cp content/projects/minimal/projects.minimal.content.ts content/projects/minimal/projects.content.ts
cp content/projects/modern/projects.modern.content.ts content/projects/modern/projects.content.ts

echo "Content files reorganized"
