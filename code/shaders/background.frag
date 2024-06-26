#version 450

layout(location = 0) in vec2 tex_coord;

layout(binding = 1) uniform sampler2D tex;

layout(location = 0) out vec4 out_color;

void main() {
  out_color = texture(tex, tex_coord);
}
