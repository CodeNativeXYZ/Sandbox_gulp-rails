module ApplicationHelper
  def gulp_assets_path(path)
    new_path = ASSETS_MANIFEST[path] if defined?(ASSETS_MANIFEST)
    raise "path miss match: #{path}" if new_path.blank?
    return "/assets/javascripts/#{new_path}" if new_path.end_with?('.js')
    "/assets/stylesheets/#{new_path}"        if new_path.end_with?('.css')
  end
end
