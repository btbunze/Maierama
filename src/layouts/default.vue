<template>
	<Head>
		<meta charset="utf-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<meta
			name="apple-mobile-web-app-capable"
			content="yes"
		/>
	</Head>
	<Body id="appcss">
		<div
			id="app"
			class="min-h-screen flex flex-col"
		>
			<Header />
			<slot />
			<Footer />
		</div>
	</Body>
</template>
