manifest_path = 'public/assets/assets-manifest.json'
ASSETS_MANIFEST = JSON.parse(File.read(manifest_path)) if File.exist?(manifest_path)
